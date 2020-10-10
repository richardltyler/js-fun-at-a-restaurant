function takeOrder(order, arr) {
  if (arr.length < 3) {
  return arr.push(order);
  }
};


function refundOrder (orderNumber, arr) {
  for(i = 0; i < arr.length; i++) {
    if(arr[i].orderNumber == orderNumber)
    arr.splice(i, 1);
  }
  return arr;
};


function listItems(arr) {
  var listOfItems = '';

  for(i = 0; i < arr.length; i++) {
    if(i < arr.length - 1) {
    listOfItems += `${arr[i].item}, `;
    } else{
      listOfItems += `${arr[i].item}`;
    }
  }
  return listOfItems;
};


function searchOrder(arr, item) {
  var itemPresent = '';

  for(i = 0; i < arr.length; i++) {
    if(arr[i].item == item) {
      itemPresent = true;
    }
  }
  return itemPresent;
};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
