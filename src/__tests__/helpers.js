const {
    incrementQty,
    decrementQty,
    recalculateSubTotal
} = require('../helpers')

test('Tambah 1 ke quantity', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Handling string pada incrementQty', () => {
    expect(incrementQty('1')).toBe(2);
})

test('Quantity 2 kurang 1 jadi 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Handling string pada decrementQty', () => {
    expect(decrementQty('2')).toBe(1);
});

test('Handling quantity dibawah 1', () => {
    expect(decrementQty(1)).toBe(1);
});

test('Subtotal berdasarkan harga dan quantity', () => {
    expect(recalculateSubTotal(50000, 2)).toBe(100000);
});

test('Subtotal dengan diskon', () => {
    expect(recalculateSubTotal(50000, 2, 25)).toBe(75000);
});

