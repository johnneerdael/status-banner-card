# Template System

Use dynamic templates to create intelligent, context-aware displays.

## Template Syntax

Templates use double curly braces syntax. Expressions are evaluated at runtime based on entity state and attributes.

::: v-pre

```yaml
rules:
  - state: "on"
    title: "Status: {{ state }}"
    subtitle: "Value: {{ attr.temperature }}°C"
```

:::

## Available Variables

| Variable                   | Description              | Example                                |
| -------------------------- | ------------------------ | -------------------------------------- |
| `state`                    | Entity state value       | `on`, `42%`, `running`                 |
| `attr.name`                | Entity attribute         | `attr.temperature`                     |
| `states('entity_id')`      | Other entity's state     | `states('sensor.temp')`                |
| `state_attr('id', 'attr')` | Other entity's attribute | `state_attr('sensor.weather', 'temp')` |

## State

Primary entity's current state:

::: v-pre

```yaml
rules:
  - state: "/.*/"
    title: "BATTERY: {{ state }}"
```

:::

Result: `BATTERY: 45%`

## Attributes

Access entity attributes by name:

::: v-pre

```yaml
rules:
  - state: "/.*/"
    title: "TEMPERATURE"
    subtitle: "{{ attr.temperature }}°C ({{ attr.humidity }}%)"
```

:::

Result: `TEMPERATURE`, `24°C (45%)`

## Cross-Entity Templates

Reference other entities in your templates:

### states()

Get another entity's state:

::: v-pre

```yaml
rules:
  - state: "on"
    subtitle: "Living room: {{ states('light.living_room') }}"
```

:::

### state_attr()

Get another entity's attribute:

::: v-pre

```yaml
rules:
  - state: "/.*/"
    subtitle: "Outdoor: {{ state_attr('sensor.weather', 'temperature') }}°C"
```

:::

## Filters

Apply transformations to values using pipe `|` syntax:

::: v-pre

```yaml
subtitle: "{{ attr.temperature | round(1) }}°C"
```

:::

### String Filters

| Filter          | Description             | Input         | Output        |
| --------------- | ----------------------- | ------------- | ------------- |
| `upper`         | Convert to uppercase    | `running`     | `RUNNING`     |
| `lower`         | Convert to lowercase    | `RUNNING`     | `running`     |
| `capitalize`    | Capitalize first letter | `hello`       | `Hello`       |
| `title`         | Title case              | `hello world` | `Hello World` |
| `replace(a, b)` | Replace text            | `error_code`  | `error code`  |

### Logic Filters

| Filter         | Description                                     |
| -------------- | ----------------------------------------------- |
| `default(val)` | Use fallback value if empty/unknown/unavailable |

### Numeric Filters

| Filter     | Description               |
| ---------- | ------------------------- |
| `round(n)` | Round to n decimal places |
| `int`      | Convert to integer        |
| `float`    | Convert to float          |

### Date/Time Filters

| Filter                  | Description                     |
| ----------------------- | ------------------------------- |
| `as_timestamp`          | Convert to Unix timestamp       |
| `timestamp_custom(fmt)` | Format timestamp using strftime |

**Format Specifiers:**

| Specifier | Description    | Example |
| --------- | -------------- | ------- |
| `%Y`      | 4-digit year   | 2024    |
| `%m`      | Month (01-12)  | 01      |
| `%d`      | Day (01-31)    | 15      |
| `%H`      | Hour (00-23)   | 14      |
| `%M`      | Minute (00-59) | 35      |
| `%S`      | Second (00-59) | 42      |
| `%p`      | AM/PM          | PM      |
| `%A`      | Weekday name   | Monday  |
| `%B`      | Month name     | January |

### Custom Filters

#### color_map

Use value as key in `color_map` configuration:

::: v-pre

```yaml
color_map:
  on: "#4CAF50"
  off: "#9E9E9E"
  running: "#2196F3"
  error: "#F44336"

rules:
  - state: "/.*/"
    color: "{{ state | color_map }}"
    title: "DYNAMIC COLOR"
```

:::

## Chaining Filters

Multiple filters can be chained:

::: v-pre

```yaml
subtitle: "{{ attr.description | replace('_', ' ') | title | default('N/A') }}"
```

:::

## Error Handling

If template evaluation fails:

- Card shows warning in browser console
- Returns empty string `""`
- Card continues to render normally

**Common causes of errors:**

1. Misspelled attribute names
2. Undefined entities in `states()` or `state_attr()`
3. Invalid filter syntax
4. Missing required filter arguments

## Performance Tips

1. **Cache complex expressions** when possible
2. **Avoid heavy calculations** in templates
3. **Use `color_map`** instead of inline conditionals for colors
4. **Prefer simple filters** over complex expressions

See [Configuration](./configuration) for full reference.
