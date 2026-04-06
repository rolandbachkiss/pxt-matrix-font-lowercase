# pxt-matrix-font-lowercase

Lowercase letters a–z as a 5×7 bitmap font for [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text).

## Usage

Simply add this extension to your project. On load, it automatically registers the font with `matrixText` — no manual setup required.

```typescript
matrixText.drawText("hello", 2, 2, matrixCore.rgb(0, 200, 255))
```

## Supported Characters

`a b c d e f g h i j k l m n o p q r s t u v w x y z`

## Font Details

| Property | Value |
|----------|-------|
| Glyph size | 5×7 pixels |
| Layout | Column-major, 1 byte per column, bit 0 = top row |
| Data | Stored in flash (zero RAM cost) |
| Characters | 26 glyphs |

## API

| Block | Description |
|-------|-------------|
| `lowercase font (5×7)` | Returns the MatrixFont object |

## Dependencies

- [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text)
- [pxt-matrix-core](https://github.com/rolandbachkiss/pxt-matrix-core)

## License

MIT © Roland Bach Kiss
