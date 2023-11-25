radio.onReceivedNumber(function (receivedNumber) {
    if (rec_num == 0) {
        basic.showNumber(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.showIcon(IconNames.Heart)
})
let rec_num = 0
radio.setGroup(1)
loops.everyInterval(1000, function () {
    control.waitForEvent(rec_num, 0)
})
