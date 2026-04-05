// test.ts — pxt-matrix-font-lowercase visual hardware test
//
// Tests that the lowercase letter font is properly registered and renders
// correctly on a 32×32 NeoPixel matrix.
//
// CP 0 — init + font loaded
// CP 1 — glyphW/glyphH sanity check
// CP 2 — draw single character 'a'
// CP 3 — draw letters a-z across rows (5 per row)
// CP 4 — textWidth check ("hello" = 5 chars = 29px)
// CP 5 — scroll "hello world" across the matrix
// CP 6 — DONE

function cp(n: number): void {
    const cx = n % 5
    const cy = Math.idiv(n, 5)
    led.plot(cx, cy)
}

// ─── CP 0 — init ────────────────────────────────────────────────────────────
cp(0)
matrixCore.initNeoPixel(DigitalPin.P0, MatrixLayout.Grid2x2)
matrixCore.setBrightness(80)
matrixCore.clear()
matrixCore.updateDisplay()

const f = matrixFontLowercase.font()

// ─── CP 1 — glyphW / glyphH sanity ─────────────────────────────────────────
cp(1)
if (f.glyphW !== 5 || f.glyphH !== 7) {
    for (let i = 0; i < 6; i++) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
}

// ─── CP 2 — draw single character 'a' ───────────────────────────────────────
cp(2)
matrixCore.clear()
matrixText.drawChar("a", 1, 1, matrixCore.rgb(0, 200, 0))
matrixCore.updateDisplay()
basic.pause(1000)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 3 — draw a-z in rows (5 chars per row) ──────────────────────────────
cp(3)
matrixCore.clear()
const letters = "abcdefghijklmnopqrstuvwxyz"
// Row 0: a-e in cyan
for (let i = 0; i < 5 && i < letters.length; i++) {
    matrixText.drawChar(letters.charAt(i), i * 6, 0, matrixCore.rgb(0, 200, 200))
}
// Row 1: f-j in magenta
for (let i = 5; i < 10 && i < letters.length; i++) {
    matrixText.drawChar(letters.charAt(i), (i - 5) * 6, 8, matrixCore.rgb(200, 0, 200))
}
// Row 2: k-o in orange
for (let i = 10; i < 15 && i < letters.length; i++) {
    matrixText.drawChar(letters.charAt(i), (i - 10) * 6, 16, matrixCore.rgb(255, 140, 0))
}
// Row 3: p-t in white
for (let i = 15; i < 20 && i < letters.length; i++) {
    matrixText.drawChar(letters.charAt(i), (i - 15) * 6, 24, matrixCore.rgb(200, 200, 200))
}
matrixCore.updateDisplay()
basic.pause(2000)
// Row showing u-z (only 6 chars)
matrixCore.clear()
for (let i = 20; i < 26 && i < letters.length; i++) {
    matrixText.drawChar(letters.charAt(i), (i - 20) * 6, 12, matrixCore.rgb(100, 255, 100))
}
matrixCore.updateDisplay()
basic.pause(1500)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 4 — textWidth check ─────────────────────────────────────────────────
cp(4)
const tw = matrixText.textWidth("hello")   // expect 29 (5×5 + 4×1 gaps)
matrixCore.clear()
for (let i = 0; i < tw && i < 32; i++) {
    matrixCore.setPixelXY(i, 0, 0, 200, 200)
}
matrixCore.updateDisplay()
basic.pause(800)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 5 — scroll "hello world" ────────────────────────────────────────────
cp(5)
matrixText.startScroll("hello world", 12, matrixCore.rgb(0, 220, 220), 2)
for (let i = 0; i < 120; i++) {
    matrixCore.clear()
    matrixText.updateScroll()
    matrixCore.updateDisplay()
    basic.pause(40)
}
matrixText.stopScroll()
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 6 — DONE ─────────────────────────────────────────────────────────────
cp(6)
for (let i = 0; i < 3; i++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
    `)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(200)
}
