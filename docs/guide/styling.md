# Styling & Theming

Customize the visual appearance of your Status Banner Card.

## CSS Variables

The card exposes CSS variables for theming integration with Home Assistant:

| Variable               | Description           | Default  |
| ---------------------- | --------------------- | -------- |
| `--sbc-card-bg`        | Card background color | HA theme |
| `--sbc-primary-text`   | Primary text color    | HA theme |
| `--sbc-secondary-text` | Secondary text color  | HA theme |
| `--sbc-secondary-bg`   | Secondary background  | HA theme |
| `--sbc-divider`        | Divider/border color  | HA theme |

## Color Configuration

### Accent Color

The main accent color is set per-rule:

```yaml
rules:
  - state: "on"
    color: "#4CAF50"
```

### Color Overrides

Override specific text and icon colors:

```yaml
title_color: "#FFFFFF"
subtitle_color: "#B0B0B0"
icon_color: "#FFFFFF"
timestamp_color: "#808080"
```

### Background Color

Set the card background:

```yaml
background_color: "#1A1A1A"
```

### Secondary Color

Used for patterns and overlays:

```yaml
secondary_color: "#000000"
```

## Color Mapping

Define reusable color palettes:

```yaml
color_map:
  on: "#4CAF50"
  off: "#9E9E9E"
  running: "#2196F3"
  error: "#F44336"
  warning: "#FF9800"
  default: "#607D8B"
```

Use in templates:

```yaml
rules:
  - state: "/.*/"
    color: "{% raw %}{{ state | color_map }}{% endraw %}"
```

## Accent Design

### Corner Position

Control where the accent triangle anchors:

```yaml
accent_corner: bottom-left
```

Options: `top-left`, `top-right`, `bottom-left`, `bottom-right`

### Accent Size

```yaml
accent_width: 60
accent_height: 100
```

### Full Background

Fill entire card with accent color:

```yaml
accent_full_background: true
```

### Stripe Pattern

Add diagonal stripes:

```yaml
show_pattern: true
pattern_size: 20
```

## Typography

### Font Sizes

Per-rule font size control:

```yaml
rules:
  - state: "on"
    title: "ACTIVE"
    title_font_size: "1.5rem"
    subtitle_font_size: "1rem"
```

### Text Alignment

```yaml
title_alignment: left
subtitle_alignment: left
icon_alignment: right
```

Options: `left`, `center`, `right`

## Dimensions

### Header Height

```yaml
header_height: 120px
```

### Icon Size

```yaml
icon_size: 56px
```

### Border Radius

```yaml
border_radius: 16px
```

### Footer Height

```yaml
footer_height: 50px
```

## Visibility Controls

Show/hide card elements:

```yaml
show_accent: true
show_pattern: false
show_status: true
show_footer: true
```

## Status Box Styling

```yaml
status_label: "Details"
status_opacity: 90
```

## Dark Theme Examples

### Deep Shadow

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.example
background_color: "#1A1A1A"
rules:
  - state: "on"
    color: "#00E676"
    title_color: "#FFFFFF"
    title: "ACTIVE"
```

### Glass Effect

```yaml
rules:
  - state: "/.*/"
    color: "rgba(255, 152, 0, 0.2)"
    title_color: "#FF9800"
    title: "TRANSPARENT ACCENT"
```

### High Contrast

```yaml
accent_full_background: true
secondary_color: "#000000"
title_color: "#FFFFFF"
rules:
  - state: "error"
    color: "#F44336"
    title: "CRITICAL ALERT"
```

## Best Practices

1. **Use color_map** for consistent theming across rules
2. **Match HA theme** by using CSS variables when possible
3. **Test contrast** to ensure readability
4. **Use RGBA** for transparent overlays
5. **Limit accent size** for subtle indicators

See [Layout Variants](./layout-variants) for design inspiration.
