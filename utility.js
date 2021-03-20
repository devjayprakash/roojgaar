let logData = (str) => {
    console.log(str + " on " + Date())
}


let logError = (str) => {
    console.error(str + " on " + Date());
}

module.exports = {
    logData,
    logError
}