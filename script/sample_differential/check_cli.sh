#!/bin/bash
# Sample differential, part 2: ask concerto-core whether it accepts what
# generate.clj generated.
#
#   script/sample_differential/check_cli.sh TEMPLATES_DIR SAMPLES_DIR
#
# Prints a line for each sample concerto-core rejects, then a count. Needs the
# concerto CLI on PATH (npm i -g @accordproject/concerto-cli). Anything rejected
# is a disagreement: this library's schema accepted something Concerto does not.
templates="$1"
samples="$2"

check() {
  f="$1"
  t="${f%%__*}"
  err=$(concerto validate --input "$samples/$f" --model "$templates/$t"/model/*.cto 2>&1 \
          | grep " - error" | head -1 | cut -c14-150)
  if [ -z "$err" ]; then echo "$f valid"; else echo "$f INVALID $err"; fi
}
export -f check
export templates samples

results=$( (cd "$samples" && ls ./*.json | sed 's|^\./||' | grep -v '^manifest') \
             | xargs -P 6 -I{} bash -c 'check {}' )

echo "$results" | grep INVALID
echo "$(echo "$results" | wc -l | tr -d ' ') samples, $(echo "$results" | grep -c ' valid$') accepted by concerto-core"
