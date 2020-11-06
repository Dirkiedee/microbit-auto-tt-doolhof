bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
})
