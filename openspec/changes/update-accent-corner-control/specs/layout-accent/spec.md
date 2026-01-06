## ADDED Requirements
### Requirement: Accent Corner Control
The card SHALL render the accent triangle originating from a single configurable corner.

#### Scenario: Corner selection
- **WHEN** the user sets `accent_corner` to `top-left`, `top-right`, `bottom-left`, or `bottom-right`
- **THEN** the triangle originates at that corner
- **AND** extends along that corner’s two adjacent edges using configured `accent_width` and `accent_height` percentages.

#### Scenario: Hide accent
- **WHEN** `show_accent` is false
- **THEN** no accent triangle or pattern is rendered.

#### Scenario: Full background
- **WHEN** `accent_full_background` is true
- **THEN** the accent fills the card background (no clip-path)
- **AND** width/height percentage settings are ignored.

#### Scenario: Default behavior
- **WHEN** the user does not configure accent options
- **THEN** the accent is shown by default with `accent_corner` = `bottom-left`, `accent_width` = 60%, `accent_height` = 100%, and `accent_full_background` = false.
