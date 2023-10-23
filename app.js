const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYentoPound = function(valueinYen) {
    let valueInPound = valueinYen * .87;
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
};
console.log(sum(7,3));
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };