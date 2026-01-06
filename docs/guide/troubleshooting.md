# Troubleshooting

Common issues and solutions for the Status Banner Card.

## Card Not Appearing

### "Custom element doesn't exist"

**Cause**: The card resource isn't loaded properly.

**Solutions**:

1. Refresh browser with cache clear (Ctrl+F5 / Cmd+Shift+R)
2. Verify resource URL in Settings → Dashboards → Resources:
   - Should be `/local/lovelace-multi-state-entities-card.js`
   - Type must be "JavaScript Module"
3. Check file exists at `/config/www/lovelace-multi-state-entities-card.js`

### Card not in "Add Card" list

**Solutions**:

1. Hard refresh the browser
2. Clear browser cache
3. Restart Home Assistant
4. Re-add the resource in Dashboard settings

## Configuration Issues

### "No matching rule" warning

**Cause**: Entity state doesn't match any rule.

**Solutions**:

1. Add a catch-all rule at the end:

   ```yaml
   - state: "/.*/"
     title: "DEFAULT"
     color: "#607D8B"
   ```

2. Use `default` configuration:

   ```yaml
   default:
     title: "UNKNOWN STATE"
     color: "#9E9E9E"
   ```

3. Check actual state in Developer Tools → States

### Entity not found

**Cause**: Invalid entity ID or entity doesn't exist.

**Solutions**:

1. Verify entity ID in Developer Tools → States
2. Check for typos in entity ID
3. Ensure entity is available (not `unavailable`)

## Template Issues

### Templates not evaluating

**Cause**: Syntax error or invalid expression.

**Solutions**:

1. Check double curly braces syntax (e.g., `state` wrapped in double braces)
2. Verify attribute names match exactly
3. Check browser console for error messages

### Attribute not found

**Cause**: Entity doesn't have the specified attribute.

**Solutions**:

1. Inspect entity in Developer Tools → States
2. Use `default` filter to provide fallback value
3. Check attribute spelling (case-sensitive)

### Cross-entity templates failing

**Cause**: Referenced entity doesn't exist.

**Solutions**:

1. Verify entity ID in states() function call
2. Check entity availability
3. Use default fallback

## Styling Issues

### Colors not showing

**Cause**: Invalid color format.

**Solutions**:

1. Use valid hex: `#RRGGBB` or `#RGB`
2. Check for typos in color property
3. Verify color_map keys match state values

### Accent not visible

**Cause**: Accent disabled or dimensions too small.

**Solutions**:

1. Ensure `show_accent: true`
2. Check `accent_width` and `accent_height` values
3. Verify accent color contrasts with background

### Text not readable

**Cause**: Poor contrast between text and background.

**Solutions**:

1. Set explicit `title_color` and `subtitle_color`
2. Adjust accent color for better contrast
3. Use darker/lighter background

## Action Issues

### Tap action not working

**Cause**: Action configuration error.

**Solutions**:

1. Verify action syntax:
   ```yaml
   tap_action:
     action: more-info
     entity: sensor.example
   ```
2. Check service name for `call-service`
3. Verify target entity exists

### Button not appearing

**Cause**: Button not configured in current rule.

**Solutions**:

1. Add `button_text` to rule
2. Ensure `show_footer: true`
3. Configure `button_actions`

## Performance Issues

### Card slow to update

**Cause**: Complex templates or many entities.

**Solutions**:

1. Simplify template expressions
2. Reduce cross-entity references
3. Use template sensors for complex logic

### Browser console errors

**Cause**: JavaScript errors in card.

**Solutions**:

1. Check for template syntax errors
2. Verify all referenced entities exist
3. Update to latest card version

## HACS Issues

### Repository not found

**Solutions**:

1. Use correct format: `johnneerdael/lovelace-multi-state-entities-card`
2. Don't include `github.com/` prefix
3. Check internet connection

### Update not applying

**Solutions**:

1. Clear browser cache
2. Restart Home Assistant
3. Re-download from HACS

## Debug Mode

Enable browser developer tools to see detailed logs:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Filter by `[status-banner-card]`
4. Look for error messages

## Getting Help

If you're still stuck:

1. Check [GitHub Issues](https://github.com/johnneerdael/lovelace-multi-state-entities-card/issues)
2. Include:
   - Card configuration (YAML)
   - Entity state (from Developer Tools)
   - Browser console errors
   - Home Assistant version
