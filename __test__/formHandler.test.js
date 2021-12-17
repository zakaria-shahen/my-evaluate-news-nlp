/**
 * @jest-environment jsdom
 */

const formHandler = require("../src/client/js/formHandler")
require('jest-fetch-mock').enableMocks()
require('regenerator-runtime/runtime')

global.Client = jest.createMockFromModule("./Client")

global.alert = jest.fn(value => true)
beforeEach(() => {
    alert.mockClear()
    fetch.resetMocks()
})

const value = "link"
document.getElementById = jest.fn(name => {
    const input = document.createElement("input")
    input.value = value
    return input
})

const preventDefault = jest.fn(() => { })

const inputAPI = {
    status: { msg: "ERR" },
    agreement: 1, confidence: 2, irony: 3, score_tag: 4
}

describe("handleSubmit()", () => {

    it("invoke fetch and alert if err", async () => {

        fetch.mockResponseOnce(JSON.stringify(inputAPI))
        const result = await formHandler.handleSubmit({ preventDefault })
        expect(preventDefault).toHaveBeenCalledTimes(1)
        expect(Client.checkForName).toHaveBeenCalledWith(value)
        expect(document.getElementById).toBeCalledTimes(1)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`http://localhost:8081/test?url=${value}`)
        expect(result).toBeUndefined()
    })


    // it("invoke event.preventDefault()", async () => {
    //     await expect(preventDefault).toHaveBeenCalledTimes(1)
    // }) 

    // it("invoke getElementById()", async () => {
    //     const n = document.getElementById("name").value
    //     expect(document.getElementById).toBeCalledTimes(1)
    // })

    // it("invoke checkForName()", async () => {
    //     await expect(Client.checkForName).toBeCalled()
    //     expect(checkForName).toHaveBeenCalledWith(input.value)
    // })

})