# Project Context

## Purpose

A custom Home Assistant Lovelace card designed for displaying multi-state entities with a banner-style UI. It supports rules-based styling, template expressions, and a flexible accent design.

## Tech Stack

- **Languages:** TypeScript
- **UI Library:** Lit (Web Components)
- **Build Tool:** Rollup
- **Ecosystem:** Home Assistant (Lovelace)
- **Utilities:** `custom-card-helpers`, `home-assistant-js-websocket`
- **Linting/Formatting:** ESLint, Prettier
- **Testing:** `tsx`, `jsdom`

## Project Conventions

### Code Style

- **Indentation:** 2 spaces
- **Semicolons:** Required
- **Quotes:** Single quotes for strings
- **Naming:**
  - Classes: `PascalCase` (e.g., `LovelaceMultiStateEntitiesCard`)
  - Interfaces/Types: `PascalCase`
  - Variables/Functions: `camelCase`
  - Constants: `UPPER_SNAKE_CASE`
  - Private members: Prefix with underscore `_` (e.g., `_config`)
- **Decorators:** Use `@customElement`, `@property`, `@state` from `lit/decorators.js`.
- **Typing:** Strict typing; avoid `any`; annotate function return types.

### Architecture Patterns

- **Web Components:** Built using LitElement.
- **Rules Engine:** Separated logic in `src/rules/matcher.ts` for matching entity states against configuration rules.
- **Template Parsing:** Custom regex-based parser in `src/template/parser.ts` supporting filters and Home Assistant state access.
- **Styles:** Externalized in `src/styles.ts` using Lit's `css` tag.
- **Configuration:** Centralized types in `src/types.ts`.

### Testing Strategy

- Tests are located in the `test/` directory.
- Execution via `tsx` for direct TypeScript running.
- Uses `jsdom` for DOM-dependent tests.
- Full suite run via `npm test`.

### Git Workflow

- No specific branching strategy defined in documentation, but standard PR-based workflow is implied for GitHub.

## Domain Context

- **Home Assistant:** An open-source home automation platform.
- **Lovelace:** The Home Assistant UI framework.
- **Custom Cards:** Community-developed UI components for Lovelace.

## Important Constraints

- Must be compatible with Home Assistant's Lovelace environment.
- Templates must handle missing or invalid entity states gracefully.
- Component must be self-contained in a single production bundle (`dist/`).

## External Dependencies

- **Home Assistant:** The host platform.
- **custom-card-helpers:** Utility functions for interacting with Home Assistant.
- **lit:** The underlying framework for the web component.
