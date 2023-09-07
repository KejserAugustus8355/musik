radio.onReceivedNumber(function (receivedNumber) {
    radio.sendString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Prut")
})
radio.setGroup(2)
basic.forever(function () {
	
})
