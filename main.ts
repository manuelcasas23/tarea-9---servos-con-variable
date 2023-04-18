input.onButtonPressed(Button.A, function () {
    for (let índice = 0; índice <= 180; índice++) {
        servos.P0.setAngle(índice)
        basic.pause(100)
    }
    basic.showNumber(180)
})
input.onButtonPressed(Button.AB, function () {
    for (let índice = 0; índice <= 45; índice++) {
        servos.P2.setAngle(índice)
        basic.pause(400)
    }
    basic.showNumber(45)
})
input.onButtonPressed(Button.B, function () {
    for (let índice = 0; índice <= 90; índice++) {
        servos.P1.setAngle(índice)
        basic.pause(200)
    }
    basic.showNumber(90)
})
servos.P0.setAngle(180)
servos.P1.setAngle(180)
servos.P2.setAngle(180)
