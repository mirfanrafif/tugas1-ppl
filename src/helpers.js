const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if (qty > 1)
        return parseInt(qty) - 1;
    return 1
};
const recalculateSubTotal = (price, qty, discount = 0) => {
    return (1 - parseFloat(discount) / 100) * price * qty;
}
module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubTotal
};
