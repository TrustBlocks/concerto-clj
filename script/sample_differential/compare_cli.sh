#!/bin/bash
# The command line against Concerto's: for every sample.json and request.json in
# the cicero-template-library, does `concerto-clj validate` agree with
# `concerto validate`?
#
#   script/sample_differential/compare_cli.sh TEMPLATES_DIR [CONCERTO_VERSION]
#
# Prints each disagreement, then a count. Needs the concerto CLI on PATH (the
# reference) and bb. The models are the template's `.cto` files, so the first run
# parses them with Accord's CLI and fills concerto-clj's cache; later runs are
# fast. Concerto's `validate` exits 0 whatever it finds, so its verdict is read
# from its output, as in check_cli.sh.
templates="$1"
version="${2:-4}"
here="$(cd "$(dirname "$0")/../.." && pwd)"

compare() {
  f="$1"
  t="$(basename "$(dirname "$f")")"
  dir="$(dirname "$f")"
  theirs=valid
  concerto validate --input "$f" --model "$dir"/model/*.cto 2>&1 | grep -q " - error" && theirs=INVALID
  ours=valid
  (cd "$here" && bb -m com.trustblocks.concerto.cli validate --input "$f" --model "$dir/model" \
      --concerto-version "$version" >/dev/null 2>&1) || ours=INVALID
  if [ "$ours" = "$theirs" ]; then echo "same $t/$(basename "$f") $ours"; else echo "DIFFERENT $t/$(basename "$f"): concerto-clj $ours, concerto $theirs"; fi
}
export -f compare
export here version

results=$( ls "$templates"/*/sample.json "$templates"/*/request.json 2>/dev/null | xargs -P 4 -I{} bash -c 'compare {}' )

echo "$results" | grep DIFFERENT
echo "$(echo "$results" | wc -l | tr -d ' ') instances, $(echo "$results" | grep -c '^same') agree, $(echo "$results" | grep -c 'INVALID$') of them invalid"
