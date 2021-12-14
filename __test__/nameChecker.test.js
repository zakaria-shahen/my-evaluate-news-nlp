const nameChecker = require('../src/client/js/nameChecker')

jest.mock("window", 'alert').mockImplementation(() => true)


describe("testing formHandler", () => {
    const input = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"]
    test.each(input)("test name output", (a) => {
        
        expect(window.alert).toBeCalledWith(true)
        expect(nameChecker(a))
    })
    


})