#!/usr/bin/env bash
DIR="$(dirname "$0")"
exec pnpx tsx "$DIR/sandbox.ts" "$@"
