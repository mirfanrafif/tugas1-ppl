/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
} = require("../helpers");

test("qty 1 ditambah 1 samadengan 2", () => {
  expect(incrementQty(1)).toBe(2);
});

test("qty 2 dikurangi 1 samadengan 1", () => {
  expect(decrementQty(2)).toBe(1);
});

test("harga 25000 dengan jumlah barang 2 total menjadi 50000", () => {
  expect(recalculateSubtotal(25000, 2)).toBe(50000);
});
