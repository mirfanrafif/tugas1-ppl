import { 
  incrementQty, 
  decrementQty,
  recalculateSubTotal 
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const code = document.querySelector('#code');
const confirmButton = document.querySelector('#confirmButton');

let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubTotal(price.value, qtyInput.value, discount)}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubTotal(price.value, qtyInput.value, discount)}`;
});

confirmButton.addEventListener('click', () => {
  if (code.value === 'PROMO25') {
    discount = 25;
    subtotal.textContent = `Rp. ${recalculateSubTotal(price.value, qtyInput.value, discount)}`
  } else {
    discount = 0;
    subtotal.textContent = `Rp. ${recalculateSubTotal(price.value, qtyInput.value, discount)}`
  }
});