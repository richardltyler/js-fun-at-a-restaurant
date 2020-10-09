function takeOrder(order, arr) {
  if (arr.length < 3) {
  return arr.push(order);
};
}

function refundOrder (orderNumber, arr) {
  for(i = 0; i < arr.length; i++) {
    if(arr[i].orderNumber == orderNumber)
    arr.splice(i, 1);
  }
  return arr;
};

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
