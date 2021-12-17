const formHandler = require("../src/client/js/formHandler")
const nameChecker = require("../src/client/js/nameChecker")


module.exports = {
    checkForName: nameChecker.checkForName,
    handleSubmit: formHandler.handleSubmit
}