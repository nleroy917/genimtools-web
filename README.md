<div align="center">

  <h1>🧬🕸️ genimtools-web</h1>

<strong>A browser-native, react-based GUI implementation of [genimtools](https://github.com/databio/genimtools) using <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>.</strong>

<sub>Built with 🦀🕸 by <a href="https://rustwasm.github.io/">The Rust and WebAssembly Working Group</a></sub>

</div>

## About

[genimtools](https://github.com/databio/genimtools) is a suite of tools written in rust for performance critical tasks in genomics. This project attempts to provide a browser-native GUI for a more user-friendly experience.

**There are two core components to this project:**

1. A library crate that [targets wasm32-unknown-unknown](https://rustwasm.github.io/wasm-bindgen/reference/rust-targets.html) and exposes a javascript API for interacting with genimtools via the browser. It is essentially a binding to genimtools.
2. A [nextjs](https://nextjs.org/) web app that uses the library crate to provide a user interface for genimtools.

This is very-much a work in progress. The current version is a proof of concept and is not ready for production use.

## Development

### Start the `wasm-pack` development server

You can watch and hot-reload the library crate with the following command:

```
sh wasm_dev.sh
```

This rebuilds and reinjects the library crate into the web app on every change.

### Start the `nextjs` development server

You can watch and hot-reload the web app with the following command:

```
npm run dev
```
