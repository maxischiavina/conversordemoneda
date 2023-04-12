test("One euro should be 1.206 dollars", function() {
    // importo la funcion desde app.js
    const {
        fromEuroToDollar,
        fromYenToPound
    } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("3.5 Dollars deberian ser 373,04 yens", function() {
    const {
        fromDollarToYen
    } = require('./app.js')
    expect(fromDollarToYen(3.5)).toBe("373.04");
})


test("3500 Dollars deberian ser 21.89 pounds", function() {
    const {
        fromYenToPound
    } = require('./app.js')
    expect(fromYenToPound(3500)).toBe("21.89");
})