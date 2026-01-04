# Agent Guidelines for status-banner-card

This repository contains a custom Home Assistant Lovelace card designed for displaying multi-state entities with a banner-style UI. It supports rules-based styling, template expressions, and a flexible accent design.

## Build and Development Commands

- **Build:** `npm run build` - Compiles the project using Rollup.
- **Start (Dev):** `npm run start` - Watches for changes and serves the dev build.
- **Lint:** `npm run lint` - Runs ESLint on `src/**/*.ts`.
- **Format:** `npm run format` - Formats code using Prettier.
- **Test:** `npm run test` - Runs basic tests using `tsx`.
- **Single Test:** To run a specific test file, use `npx tsx <path-to-test>`.

## Project Structure

- `src/`: TypeScript source code.
  - `lovelace-multi-state-entities-card.ts`: Main card component (LitElement). Handles rendering logic and action execution.
  - `editor.ts`: Card configuration editor interface.
  - `rules/matcher.ts`: Logic for matching entity states/attributes against user-defined rules.
  - `template/parser.ts`: Custom template expression parser supporting `{{ }}` syntax and filters.
  - `types.ts`: Central TypeScript interfaces and types for configuration and internal data.
  - `constants.ts`: Default configurations and static metadata.
  - `styles.ts`: Main component CSS using Lit's `css` tag.
- `test/`: Test files, primarily using `tsx` for direct execution.
- `dist/`: Compiled production bundles.

## Code Style & Conventions

### 1. General

- Use **TypeScript** for all source files.
- Adhere to **Lit** (lit.dev) patterns for web components, utilizing decorators for properties and state.
- Code should be linted with ESLint and formatted with Prettier before committing.

### 2. Imports

- Standard libraries first (none typically), then third-party libraries (`lit`, `custom-card-helpers`), then local relative imports.
- Use relative imports for all internal files (e.g., `import { ... } from './types'`).

### 3. Naming Conventions

- **Classes:** `PascalCase` (e.g., `LovelaceMultiStateEntitiesCard`).
- **Interfaces & Types:** `PascalCase` (e.g., `StatusBannerCardConfig`, `StateRule`).
- **Variables & Functions:** `camelCase` (e.g., `resolveDisplayData`).
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `DEFAULT_CONFIG`, `CORNER_COORDS`).
- **Private properties/methods:** Prefix with an underscore `_` (e.g., `private _config`, `private _handleButtonClick`).

### 4. Types

- Define all configuration and data structures in `src/types.ts`.
- Use strict typing; avoid `any` unless absolutely necessary (use `unknown` for truly unknown types).
- Always annotate function return types, including private methods.

### 5. Formatting & Style

- Indentation: 2 spaces.
- Semicolons: Required.
- Quotes: Single quotes for strings, unless nesting requires double quotes.
- Decorators: Use `@customElement`, `@property`, `@state` from `lit/decorators.js`.
- Prefer `TemplateResult` as the return type for rendering methods.

### 6. Error Handling

- Wrap potentially failing operations (e.g., `Date` parsing, template evaluation) in `try/catch`.
- In `parser.ts`, failed expressions should log a warning to the console (`[status-banner-card] Failed to evaluate...`) and return an empty string rather than crashing.
- Provide user-friendly feedback in the UI using `ha-alert` when critical configuration (like the primary `entity`) is missing.

### 7. Lit Templates & Styles

- Use `html` tagged templates for all rendering.
- Use `nothing` from `lit` for conditional rendering of empty or nullish content.
- Externalize component CSS into `src/styles.ts` where possible; use inline styles only for dynamic values (e.g., colors, percentages).

## Logic & Features

### Rule Matching (`src/rules/matcher.ts`)

- Rules are matched against the primary entity's state and attributes.
- Support for regex patterns in `state` and `attribute.value` when wrapped in `/.../`.
- Supports case-insensitive matching if the state pattern starts with `~`.

### Template Parser (`src/template/parser.ts`)

- Evaluates `{{ expression }}` using a custom regex-based parser.
- Supported variables: `state`, `attr.name`, `states('entity_id')`, `state_attr('entity_id', 'attr')`.
- Supported filters (applied via `|`):
  - String: `upper`, `lower`, `capitalize`, `title`, `replace(search, replace)`.
  - Logic: `default(value)`.
  - Formatting: `round(precision)`, `int`, `float`.
  - Date/Time: `as_timestamp(value)`, `timestamp_custom(format)`.
  - Custom: `color_map` (uses the `color_map` defined in config).

### Accent Design

- The card features a diagonal accent (triangle) controlled by `accent_start` and `accent_end`.
- Logic for calculating the `clip-path` polygon is located in `src/lovelace-multi-state-entities-card.ts`.

## Testing

- Tests are written in TypeScript and located in the `test/` directory.
- Run the full suite with `npm test`.
- New features or bug fixes should include corresponding tests in `test/basic.test.ts` or a new test file.
- Use `jsdom` for tests that require a DOM environment.
