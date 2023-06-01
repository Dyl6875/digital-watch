let minutes = 0
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
