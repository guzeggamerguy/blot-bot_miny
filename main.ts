input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    basic.showString("NeeeeeeeeD! FooooooooooD!")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . # .
        . . . . .
        . . . . .
        . . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("[CHOMPS AND GLUGS]")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("NeeeeeeeeD FooooooooooD!")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . . #
        . . . . .
        . . . . .
        . # . . .
        . . # # #
        `)
})
music.playMelody("C5 B C5 B C5 C5 C5 C5 ", 120)
