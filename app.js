const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    const totalYen = valueInYen.toFixed(2);
    return totalYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 127.9) * 0.8;
    const totalPounds = valueInPound.toFixed(2);
    return totalPounds;
}




let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}





// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}