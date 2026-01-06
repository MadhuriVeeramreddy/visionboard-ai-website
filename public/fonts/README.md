# Font Files

Add SF Pro Display and SF Pro Text font files to this directory:

## Required Files

- `SFProDisplay-Bold.woff2` - For headings
- `SFProText-Regular.woff2` - For body text

## Font Sources

If you don't have access to SF Pro fonts, you can:

1. **Use system fonts fallback** - The site will automatically fall back to system fonts (San Francisco on macOS/iOS, Segoe UI on Windows, etc.)

2. **Purchase SF Pro fonts** - Available from Apple Developer

3. **Use similar alternatives**:
   - Inter (free, Google Fonts)
   - System UI fonts (free, built-in)

## Current Setup

The `globals.css` file references these fonts, but if they're not present, the site will gracefully fall back to system fonts defined in `tailwind.config.ts`:

```css
font-family: 'SF Pro Display', 'system-ui', 'sans-serif';
font-family: 'SF Pro Text', 'system-ui', 'sans-serif';
```

