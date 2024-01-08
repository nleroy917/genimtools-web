#!/bin/sh

cargo watch \
  -w src \
  -s "rm -rf .next && wasm-pack build --release"