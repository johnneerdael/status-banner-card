# Lovelace Multi State Entities Card

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=johnneerdael&repository=lovelace-multi-state-entities-card&category=plugin)
[![GitHub Release](https://img.shields.io/github/release/johnneerdael/lovelace-multi-state-entities-card.svg)](https://github.com/johnneerdael/lovelace-multi-state-entities-card/releases)
[![GitHub License](https://img.shields.io/github/license/johnneerdael/lovelace-multi-state-entities-card?link=https%3A%2F%2Fgithub.com%2Fjohnneerdael%2Flovelace-multi-state-entities-card%2Fblob%2Fmain%2FLICENSE)](https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/LICENSE)

A flexible Home Assistant Lovelace card with a distinctive banner design for displaying entity states. This card excels at displaying "Call to Action" information—situations where the user needs to know something immediately or do something specific.

## Features

- **Distinctive Banner Design** - Angled color accent with optional diagonal stripe pattern
- **Fully Configurable** - Rule-based state-to-display mapping
- **Template Support** - Use `{{ state }}`, `{{ attr.name }}`, filters, and more
- **Typography Control** - Per-rule font size customization for title/subtitle
- **Accent Customization** - Adjustable width, height, and stripe size (spans full card)
- **Action Support** - Tap actions, button actions, service calls
- **Color Mapping** - Define color palettes for dynamic theming
- **Visual Editor** - Full GUI configuration with sliders and controls

## Documentation & Blueprints

To get the most out of the Status Banner Card, we provide extensive documentation and ready-to-use Blueprints:

- 📖 **[Layout Variants Guide](assets/demo_cards/layout_variants.md)** - Explore 15+ different UI styles, from compact modes to zebra-striped banners.
- 🚀 **[Blueprint Library](blueprints/README.md)** - 20+ use-cases including Appliance Monitoring, Medication Trackers, Security Alerts, and Energy Dashboards with direct "Import Blueprint" buttons.

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click the three dots menu → Custom repositories
3. Add `https://github.com/johnneerdael/lovelace-multi-state-entities-card` as a Lovelace repository
4. Search for "Lovelace Multi State Entities Card" and install
5. Refresh your browser

### Manual Installation

1. Download `lovelace-multi-state-entities-card.js` from the [latest release](https://github.com/johnneerdael/lovelace-multi-state-entities-card/releases)
2. Copy to `/config/www/lovelace-multi-state-entities-card.js`
3. Add resource in Home Assistant:
   - Go to Settings → Dashboards → Resources
   - Add `/local/lovelace-multi-state-entities-card.js` as JavaScript Module

## Quick Start

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.your_entity
rules:
  - state: 'on'
    title: "ACTIVE"
    color: "#4CAF50"
  - state: 'off'
    title: "IDLE"
    color: "#9E9E9E"
```

For advanced configuration, template filters, and button actions, please refer to the **[Blueprint Library](blueprints/README.md)**.

## Development

```Shell
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

Inspired by the [tailwindcss-template-card](https://github.com/usernein/tailwindcss-template-card) and the Home Assistant [boilerplate-card](https://github.com/custom-cards/boilerplate-card).
