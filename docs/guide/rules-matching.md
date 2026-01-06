# Rules & Matching

Understanding how state matching works in Status Banner Card.

## Rule Evaluation Order

Rules are evaluated **in order**, and the **first matching rule wins**. This means:

1. Place more specific rules at the top
2. Use catch-all rules (`/.*/`) at the end
3. Each rule independently determines display properties

## State Matching

### Exact Match

Matches exact string value:

```yaml
rules:
  - state: "on"
    title: "DEVICE ON"
    color: "#4CAF50"

  - state: "off"
    title: "DEVICE OFF"
    color: "#9E9E9E"
```

### Regex Match

Pattern matching using `/pattern/` syntax:

```yaml
rules:
  - state: "/[0-9][0-9]%/"
    title: "PERCENTAGE"

  - state: "/error.*/"
    title: "ERROR DETECTED"
    color: "#F44336"

  - state: "/.*/"
    title: "DEFAULT"
```

**Regex Examples:**

| Pattern       | Matches              | Description           |
| ------------- | -------------------- | --------------------- |
| `"on"`        | `on`                 | Exact match           |
| `"/running/"` | `running`            | Exact match (regex)   |
| `"/[A-Z]/"`   | `Running`, `STOPPED` | Starts with uppercase |
| `"/[0-9]+/"`  | `42`, `123`, `999`   | One or more digits    |
| `"/.*/"`      | Anything             | Catch-all (use last)  |

### Case-Insensitive Match

Prefix with `~` for case-insensitive matching:

```yaml
rules:
  - state: "~RUNNING"
    title: "IN PROGRESS"
```

Matches: "running", "RUNNING", "Running"

## Attribute Matching

Match based on entity attributes:

```yaml
rules:
  - attribute:
      name: "status"
      value: "running"
    title: "RUNNING"

  - attribute:
      name: "mode"
      value: "cooling"
    title: "COOLING"
```

### Attribute + Regex

Combine attribute matching with regex:

```yaml
rules:
  - attribute:
      name: "error_code"
      value: "/E[0-9]{2}/"
    title: "ERROR"
    color: "#F44336"
```

## Combined Matching

Match both state AND attribute:

```yaml
rules:
  - state: "on"
    attribute:
      name: "mode"
      value: "active"
    title: "ACTIVE MODE"
    color: "#4CAF50"
```

This matches **only when**:

- State is `on` **AND**
- Attribute `mode` is `active`

## Fallback / Default Values

When **no rule matches**, use the `default` property:

```yaml
default:
  title: "STATUS: {% raw %}{{ state }}{% endraw %}"
  color: "#607D8B"

rules:
  - state: "on"
    title: "ACTIVE"
    color: "#4CAF50"

  - state: "off"
    title: "INACTIVE"
    color: "#9E9E9E"
```

## Common Patterns

### Numeric Ranges

```yaml
rules:
  - state: "/[8-9][0-9]|100/"
    title: "GOOD"

  - state: "/[5-7][0-9]/"
    title: "OK"

  - state: "/[1-4][0-9]/"
    title: "LOW"

  - state: "/[0-9]/"
    title: "CRITICAL"
```

### Text Patterns

```yaml
rules:
  - state: "/^error/i"
    title: "ERROR"

  - state: "/completed|finished|done/i"
    title: "DONE"

  - state: "/running|in_progress|active/i"
    title: "ACTIVE"
```

## Best Practices

1. **Order Rules from Specific to General**
   - Exact matches first
   - Regex patterns second
   - Catch-all last

2. **Use Descriptive State Values**
   - Instead of numeric states, map to meaningful names
   - Use template sensors for state transformation

3. **Leverage Color Mapping**
   - Use `color_map` for consistent theming
   - Dynamic colors based on state value

4. **Combine State and Attributes**
   - More precise matching logic
   - Better control over display conditions

See [Template System](./templates) for using templates in rules.
