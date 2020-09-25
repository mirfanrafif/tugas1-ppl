/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
} = require("../helpers");

test("qty 1 ditambah 1 samadengan 2", () => {
  expect(incrementQty(1)).toBe(2);
});

test("qty 2 dikurangi 1 samadengan 1", () => {
  expect(decrementQty(2)).toBe(1);
});

test("hitung diskon dengan kode", () => {
  expect(calculateDiscount(250000, "Hello")).toBe(200000);
});

test("hitung diskon tanpa kode", () => {
  expect(calculateDiscount(250000, "")).toBe(250000);
});

test("menghitung subtotal 25000 dengan barang 2 total menjadi 50000", () => {
  expect(recalculateSubtotal(25000, 2)).toBe(50000);
});

test("perkalian harga yang isinya string", () => {
  expect(recalculateSubtotal("25000", "2")).toBe(50000);
});

test("perkalian harga yang isinya string", () => {
  expect(recalculateSubtotal("25000aaaaa", "2")).toBe("error");
});
