module.exports = function toReadable (number) {
  module.exports = function toReadable (number) {
    let arrFrom1To19 = [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen']
    let arrTens = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety']
    let res = []
    let hundreds = Math.floor(number / 100)
    let tens = Math.floor(number % 100 / 10)
    let ones = number % 10

    if (number == 0) {
        return ('zero')
    }
    if(hundreds != 0) {
        res.push(arrFrom1To19[hundreds-1] + ' hundred')
    }

    if(tens >= 2) {
        res.push(arrTens[tens - 2])
        res.push(arrFrom1To19[ones - 1])
    } else {
        res.push(arrFrom1To19[number%100 - 1])
    }
    return res.join('').trim()
}

}
