/**
 * Lowercase letters a-z 5×7 bitmap font.
 * Auto-registers into matrixText on load.
 */
//% color=45 icon="\uf031"
//% blockNamespace=matrixText
namespace matrixFontLowercase {
    // Font data in flash — zero RAM cost
    // 26 glyphs × 5 columns = 130 bytes
    // charMap: "abcdefghijklmnopqrstuvwxyz"
    const _data = hex`20545454787F484444383844444420384444487F3854545418087E0901020C5252523E7F0804047800447D40002040443D007F1028440000417F40007C041804787C0804047838444444387C14141408081414187C7C080404084854545420043F4440203C4040207C1C2040201C3C4030403C44281028440C5050503C4464544C44`
    const _charMap = "abcdefghijklmnopqrstuvwxyz"

    // Auto-register on extension load
    const _font = new MatrixFont(5, 7, _charMap, _data)
    matrixText.registerFont(_font)

    /**
     * The lowercase letters font object (5×7)
     */
    //% blockId=matrix_font_lowercase_get
    //% block="lowercase font (5×7)"
    //% group="Fonts"
    export function font(): MatrixFont {
        return _font
    }
}
