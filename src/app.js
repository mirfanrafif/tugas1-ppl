import { incrementQty, decrementQty, recalculateSubtotal } from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const subtotal = document.querySelector("#subtotal");
const price = document.querySelector("#price");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(
    price.value,
    qtyInput.value
  )}`;
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(
    price.value,
    qtyInput.value
  )}`;
});
