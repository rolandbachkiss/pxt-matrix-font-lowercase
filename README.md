# pxt-matrix-font-lowercase

A MakeCode micro:bit extension providing lowercase letters a–z as a 5×7 bitmap font for use with [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text).

## Usage

Simply add this extension to your project. On load, it automatically registers the font with `matrixText`, making all 26 lowercase letters available in `matrixText.drawText()` — no manual setup required.

You can also retrieve the font object directly:

```typescript
const lower = matrixFontLowercase.font()
// lower.glyphW === 5, lower.glyphH === 7
```

## Supported characters

`a b c d e f g h i j k l m n o p q r s t u v w x y z`

## Font format

- Glyph size: 5×7 pixels
- Layout: column-major, 1 byte per column, bit 0 = top row
- Data stored in flash (zero RAM cost)

## Dependencies

- [pxt-matrix-core](https://github.com/rolandbachkiss/pxt-matrix-core)
- [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text)
- [pxt-neopixel](https://github.com/microsoft/pxt-neopixel) v0.7.6
