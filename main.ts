radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        light1 = -1 * light1
    }
})
let light1 = 0
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
light1 = -1
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 35) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pins.analogReadPin(AnalogPin.P1) > 35) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pins.analogReadPin(AnalogPin.P2) > 35) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
