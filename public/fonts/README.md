# Font Files

This directory contains the font files used on the website.

## Current Fonts

### Elza (Default Font)

The Elza font is used as the default sans-serif font across the entire website.

**Files in use:**

- `fonnts.com-Elza.otf` - Regular Weight (400)
- `fonnts.com-Elza_Medium.otf` - Medium Weight (500)
- `fonnts.com-Elza_Bold.otf` - Bold Weight (700)

Elza is a commercial font designed by Daniel Sabino and available through:

- **Blackletra Type Foundry**: https://blackletra.com/typefaces/elza

### Recoleta (Hero Title Font)

The Recoleta font is used for hero titles and special headings.

**Files in use:**

- `Recoleta-Regular.otf` - Regular Weight (400)

## Font Configuration

Fonts are configured in `/src/styles/global.css` with:

- Elza set as the default `--font-sans` variable
- Recoleta available via the `font-recoleta` utility class

## Additional Elza Variants

This directory also contains additional Elza font variants that can be configured if needed:

- Condensed, Narrow, Text, and Round variations
- Various weights: Thin, Extralight, Light, Medium, Semibold, Bold, Black
- Oblique (italic) versions of all weights
