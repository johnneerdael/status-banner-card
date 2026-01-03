# Status Banner Card Engineering Guide

## Project Context
**What:** A Custom Home Assistant Lovelace card for displaying status-driven entities (Garbage, EV, Alarm).
**Stack:** TypeScript, LitElement (HA Standard), Tailwind CSS, Node.js.
**Architecture:**
1.  **Config**: User YAML config is validated and stored.
2.  **Controller**: `set hass(hass)` updates internal state.
3.  **Logic**: Rules are processed against entities to determine the active "Banner".
4.  **Render**: LitElement renders the banner using Tailwind classes.

## Commands
- **Install**: `npm install`
- **Dev Server**: `npm start` (Watches for changes)
- **Build**: `npm run build` (Produces `status-banner-card.js` in `dist/`)
- **Lint**: `npm run lint`

## Code Standards
- **Statelessness**: The card is re-rendered frequently. Do not store local state unless necessary for UI interaction (animations). Rely on `hass` object updates.
- **Styling**: Use Tailwind CSS classes. Since this runs in Shadow DOM, Tailwind directives must be injected into the Lit styles `css` tag or constructed stylesheet.
- **Templates**: All user-facing strings support Jinja2-style templates (handled by internal JS logic, not actual Jinja).
