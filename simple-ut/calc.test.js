const calc = require('./calc');

test('Penjumlahan 1 + 2 adalah 3', () => {
    expect(calc.sum(1,3)).toBe(4);
});

test('Pengurangan dari 4 - 2 adalah 2', () => {
    expect(calc.sub(4,2)).toBe(2);
});

test('Perkalian dari 2 * 2 adalah 4', () => {
    expect(calc.mul(2,2)).toBe(4);
});

test('Pembagian dari 2 / 2 adalah 1', () => {
    expect(calc.div(2,2)).toBe(1);
});