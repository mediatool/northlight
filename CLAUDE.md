# Northlight UI Framework

Monorepo for Northlight UI - a React component library built on Chakra UI.

## Package Manager

**Yarn** (v1.22.22) - Do not use npm or pnpm.

```bash
yarn install
```

## Monorepo Structure

This is a Lerna + Nx managed monorepo with 4 packages:

| Package              | Path         | Description                  |
| ---------            | ------       | -------------                |
| `@northlight/ui`     | `framework/` | Main UI component library    |
| `@northlight/tokens` | `tokens/`    | Design tokens                |
| `@northlight/icons`  | `icons/`     | Icon components              |
| `@northlight/docs`   | `docs/`      | Documentation site (private) |

## Common Commands

```bash
# Install dependencies
yarn

# Transpile all packages
yarn transpile

# Lint all packages
yarn lint

# Run all tests
yarn test

# Clean build artifacts and Nx cache
yarn clean
```

## Package-Specific Commands

Run from package directory or use `yarn nx run <package>:<script>`:

**Framework (`@northlight/ui`):**
```bash
yarn transpile    # Build the library
yarn watch        # Rebuild on changes
yarn test         # Run unit tests
yarn lint         # Lint code
```

**Tokens:**
```bash
yarn transform    # Process design tokens
yarn transpile    # Build tokens
```

**Icons:**
```bash
yarn svgo         # Optimize SVGs
yarn svgr         # Generate React components from SVGs
yarn transpile    # Build icons
```

**Docs:**
```bash
yarn dev          # Start dev server (port 5173)
yarn build        # Production build
yarn transpile:watch  # Regenerate docs on framework changes
```

## Local Development

1. `yarn` - Install dependencies
2. Terminal 1: `cd docs && yarn nx dev` - Start docs dev server
3. Terminal 2: `cd framework && yarn watch` - Watch for framework changes
4. Terminal 3: `cd docs && yarn transpile:watch` - Regenerate docs

## Tech Stack

- **React 18** with TypeScript
- **Chakra UI 2.8** - Component foundation
- **Rollup** - Bundling (ESM, UMD outputs)
- **Vite** - Docs dev server
- **Nx** - Build orchestration and caching
- **Lerna** - Versioning and publishing

## Testing

- **Mocha + Chai** - Test runner and assertions
- **Testing Library** - Component testing utilities
- **Sinon** - Mocks and spies

Tests are located in `framework/test/unit/`. Run with:
```bash
yarn test
```

## Linting

ESLint with `@mediatool/eslint-config-mediatool`. Run with:
```bash
yarn lint
```

## Build Order

Nx manages dependencies. The order is:
1. `tokens` transpile
2. `icons` transpile
3. `framework` transpile
4. `docs` transpile

Use `yarn transpile` to build all in correct order.

## CI/CD

- **CircleCI** - Runs on every push (install → transpile → lint → test)
- **GitHub Actions** - Manual publish workflow with Lerna
- **Netlify** - Deploys docs site

## Conventions

- Filenames: lowercase, dash-separated (e.g., `my-component.tsx`)
- Components: Each in its own directory under `framework/lib/components/`
- Versioning: Independent per package, using conventional commits
