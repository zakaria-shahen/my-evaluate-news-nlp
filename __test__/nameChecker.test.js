const nameChecker = require('../src/client/js/nameChecker')

global.alert = jest.fn(value => true)
global.console.log = jest.fn()
beforeEach(() => {
    alert.mockClear()
    console.log.mockClear()
})


describe("checkForName(): ", () => {

    const input = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"]
    const inputWrong = ["zakaria", "omar", "github", "FWD"]

    it.each(input)("using alert/console.log arg %j", (a) => {
        expect(nameChecker.checkForName(a)).toBeTruthy()
        expect(alert).toBeCalledTimes(1)

    })

    it.each(inputWrong)("not using alert/console.log arg %j", a => {
        expect(nameChecker.checkForName(a)).toBeUndefined()
        expect(alert).toBeCalledTimes(0)
        expect(console.log).toBeCalledTimes(1)
    })


})