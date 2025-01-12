const {oneEuroIs} = require('./oneEuroData.js')

const convertToEuro = (currency, value) => {
    return value / oneEuroIs[currency]
}

const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = convertToEuro('USD', valueInDollar);
    return valueInEuro * oneEuroIs["JPY"];    
}

const fromEuroToDollar = function (valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
}

const fromYenToPound = function (valueInYen) {
    let valueInEuro = convertToEuro('JPY', valueInYen);
    return valueInEuro * oneEuroIs["GBP"];  
}

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };