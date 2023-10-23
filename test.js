const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(5);
    const expected = 5 * 156.5;
expect(fromDollarToYen(5)).toBe(782.5);
})

test("One yen should be .87 pounds", function() {
    const { fromYentoPound } = require('./app.js');
    const pound = fromYentoPound(7);
    const expected = 7 * .87;
expect(fromYentoPound(7)).toBe(6.09);
})