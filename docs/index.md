---
layout: home

hero:
  name: "Multi State Entities Card"
  text: "Flexible Home Assistant Lovelace Card"
  tagline: Display entity states with distinctive banner designs, rule-based styling, and template support
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: View Blueprints
      link: /blueprints/
    - theme: alt
      text: Install via HACS
      link: /guide/installation

features:
  - icon: 🎨
    title: Distinctive Banner Design
    details: Angled color accent with optional diagonal stripe pattern for visual appeal
  - icon: ⚙️
    title: Fully Configurable
    details: Rule-based state-to-display mapping with extensive customization options
  - icon: 📝
    title: Template Support
    details: Use dynamic expressions, entity attributes, filters, and more for dynamic content
  - icon: 🎯
    title: Call to Action
    details: Perfect for situations where users need immediate information or specific actions
  - icon: 🎛️
    title: Typography Control
    details: Per-rule font size customization for titles and subtitles
  - icon: 🖱️
    title: Action Support
    details: Tap actions, button actions, and service calls for interactivity
  - icon: 🎨
    title: Color Mapping
    details: Define color palettes for dynamic theming across different states
  - icon: ✨
    title: Visual Editor
    details: Full GUI configuration with sliders and intuitive controls
---

## Quick Start

Add the Status Banner Card to your Home Assistant Lovelace dashboard with just a few lines of YAML:

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.your_entity
rules:
  - state: "on"
    title: "ACTIVE"
    color: "#4CAF50"
  - state: "off"
    title: "IDLE"
    color: "#9E9E9E"
```

## Documentation & Blueprints

Explore our comprehensive documentation and ready-to-use blueprints to get the most out of the Status Banner Card:

- 📖 **[Guide](/guide/introduction)** - Complete documentation for configuration and features
- 🚀 **[Blueprint Library](/blueprints/)** - 20+ use-cases with direct "Import Blueprint" buttons
- 🎨 **[Layout Variants](/guide/layout-variants)** - Explore 15+ different UI styles

## Featured Use Cases

### Appliance Monitoring

Track appliance status with visual indicators for different states (running, idle, error, etc.)

### EV Charging Management

Monitor charging progress, estimated completion time, and charging costs

### Health & Safety

Medication reminders, security alerts, and environmental monitoring

### Energy Dashboard

Track power consumption, solar production, and battery levels

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click the three dots menu → Custom repositories
3. Add `johnneerdael/lovelace-multi-state-entities-card` as a Lovelace repository
4. Search for "Lovelace Multi State Entities Card" and install
5. Refresh your browser

### Manual Installation

1. Download `lovelace-multi-state-entities-card.js` from the [latest release](https://github.com/johnneerdael/lovelace-multi-state-entities-card/releases)
2. Copy to `/config/www/lovelace-multi-state-entities-card.js`
3. Add resource in Home Assistant:
   - Go to Settings → Dashboards → Resources
   - Add `/local/lovelace-multi-state-entities-card.js` as JavaScript Module

## Credits

Inspired by the [tailwindcss-template-card](https://github.com/usernein/tailwindcss-template-card) and the Home Assistant [boilerplate-card](https://github.com/custom-cards/boilerplate-card).
