input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        led.enable(true)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
