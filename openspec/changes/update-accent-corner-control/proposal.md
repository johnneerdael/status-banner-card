# Change: Simplify accent corner control

## Why
- Current accent start/end settings do not reposition the triangle, confusing users who expect the accent to originate from a chosen corner.

## What Changes
- Replace dual corner selection with a single `accent_corner` selector (`top-left|top-right|bottom-left|bottom-right`).
- Keep width/height sliders (20–200%) applied from the chosen corner along its two adjacent edges.
- Preserve hide (`show_accent: false`) and full-background (`accent_full_background: true`) options; if full-background is true, clip-path is none.

## Impact
- Affected specs: layout-accent
- Affected code: src/editor.ts, src/lovelace-multi-state-entities-card.ts, src/types.ts, tests/docs as needed
