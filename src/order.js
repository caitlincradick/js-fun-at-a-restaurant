function takeOrder(orderObject, deliveryOrderArray) {
  if (deliveryOrderArray.length <= 2)
var newOrder = deliveryOrderArray.push(orderObject)
return newOrder
}

function refundOrder(orderNumberObject, deliveryOrderArray) {
//2 params, 2 arguments; splice method? ARRAY, if/for statements
for (i=0; deliveryOrderArray.length; i++) {
if(deliveryOrderArray[i].orderNumber === orderNumberObject) {
  return deliveryOrderArray.splice(i, 1)
}
}
}
 function listItems(itemsArray) {
//   //list order items in an array as a string
  // var itemsArray = items 
  var itemObject = []
for (i=0; i < itemsArray.length; i++) {
  itemObject.push(itemsArray[i].item)
}
return itemObject.join(', ')
 }

function searchOrder(deliveryOrders, itemString) {
//wants a boolean output, testing with searchOrder(deliveryOrders & a string) to output boolean
// if and order is in the list T, if not false
for (i=0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].item === itemString) {
    return true
    }
} return false
}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}