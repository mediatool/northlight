# 🌌 This repo has sailed into the sunset

**Northlight has moved in with the family.** As of August 2026, development of `@northlight/ui`, `@northlight/icons`, `@northlight/tokens`, and `@northlight/docs` continues inside Mediatool's private monorepo — vendored, workspace-linked, and built together with everything that consumes it.

## What this means

- 🪦 **This repo is archived.** No new issues, PRs, or commits. The lights are off (which, for a repo named after the aurora, is admittedly ironic).
- 🔒 **Northlight is no longer open source.** This repository remains available in its archived state, but future development happens behind closed doors.
- 📦 **No more npm releases.** The final published versions — `@northlight/ui@2.44.7`, `@northlight/icons@1.9.1`, `@northlight/tokens@1.4.7` — will remain on npm for existing consumers, but they are frozen in time like a very well-dressed fossil.
- 🍴 **The code you see here is yours to keep.** Everything published in this repo stays under its existing license — fork away.

## A short eulogy

Born a yarn + lerna repo, Northlight spent its years faithfully shipping buttons, date pickers, and one genuinely excellent toast system. It survived three React versions, countless peer-dependency standoffs, and at least one framer-motion upgrade nobody talks about. It didn't die — it just merged.

*Same components. Same tokens. One repo fewer.* 💫

---

# Northlight

Northlight is an open source UI framework built by Mediatool. It is based on Chakra UI and uses design tokens, making it easy to customize the look and feel of your application.

## Documentation
[https://northlight.dev/guide](https://northlight.dev/guide)

## Local sandbox

To start up a local environment of the Northlight UI framework docs:

1) Clone the repository.
2) Navigate into the root directory.
3) Run `yarn`.
4) Open one teminal, navigate to the /docs directory, and run `yarn nx dev`.
5) Open another terminal, navigate to the /framework directory, and `yarn watch`.
6) Open a third terminal, navigate to the /docs directory and run `yarn transpile:watch`.

This will spin up a local environment at [localhost:5173](http://localhost:5173) (or the first available port after that).

## Usage

To get started with Northlight, you will need to install the following packages from npm:

```
yarn add @northlight/ui
```

Once installed, you can then import the different components from Northlight into your application. Here is an example of a basic button component:

```js
import { Button } from '@northlight/ui'
```

## Components

Northlight comes with a number of components that you can use in your application. Here is a list of some of the components available:

* Buttons
* Inputs
* Layouts
* Typography
* Icons
* Modals

## Contributing

Northlight is an open source project and we welcome contributions from the community. If you would like to contribute to the project, please visit our GitHub repository and submit a pull request.

## License

Northlight is open source software released under the MIT license.

Northlight Icons is proprietary and will have to be purchased separately from UntitledUI (https://www.untitledui.com/icons)
