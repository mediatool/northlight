# Northlight UI framework

This awesome collection of components, built upon Chakra, powers all of Mediatool's features.

## Get started

1. Run `yarn`
2. Run `yarn start`
3. Navigate to http://localhost:3008

## Overview

Below you'll find an overview of each part of the library.

### lib

In this folder you'll find components, hooks, utils and theme. This is the actual library and is what gets published to npm.

### sandbox

Sandbox is what you'd expect from the name - a sandbox environment. It serves as documentation as well as a playground for testing new components in an interactive enrivonment.
Sandbox is built like a mini micro frontend, meaning that `docs` and `demo` are 2 separate mini apps. `Docs` is the default fallback when navigating to localhost:3008/.

`Docs` works similarly to how Storybook works, without the need to write explicit stories. Simply follow existing structure and create a component under `docs/pages`, and write code just how you normally would.
`Test` was created by Sebastian. However he was not aware that other main pages were documented here, thus he didn't write any explanation.

## Contribute

Want to contribute? Awesome! Find what suits your use-case below and follow the steps.

### I need to create a new component

1. Create a new folder under `lib/components`
2. Create a file inside of the folder and write your component
3. Export the component from an index file `lib/components/my-new-component/index.ts`
4. Export your folder in `lib/components/index.ts`

### I need to create a new hook

1. Create a new folder under `lib/hooks`
2. Create a file inside of the folder and write your hook
3. Export the hook from an index file `lib/hooks/my-new-hook/index.ts`
4. Export your folder in `lib/hooks/index.ts`
