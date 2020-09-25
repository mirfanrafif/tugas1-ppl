const incrementQty = (qty) => parseInt(qty) + 1;

const decrementQty = (qty) => {
  if (parseInt(qty) - 1 == 0) {
    return 1;
  } else {
    return parseInt(qty) - 1;
  }
};

const recalculateSubtotal = (price, qty) => {
  // if (typeof price != "number" || typeof qty != "number") {
  //   return "error";
  // } else {

  // }
  return parseInt(price) * parseInt(qty);
};

const calculateDiscount = (subtotal, code) => {
  if (code) {
    discount = subtotal - subtotal * 0.2;
    return discount;
  } else {
    return subtotal;
  }
};

module.exports = {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
};
