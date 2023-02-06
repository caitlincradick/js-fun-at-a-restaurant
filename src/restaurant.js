function createRestaurant (restaurantName) {
var restaurantNameArray ={
  name:restaurantName,  
  menus:
  {
  breakfast:[],
  lunch: [],
  dinner: []
  }
} 
return restaurantNameArray
}

function addMenuItem(menusArray) {
  // var menusArray = []
  //   menus:
  // {
  //   name: [],  
  //   price:[],
  //   type: []
  // }
// for (i=0;menusArray.length; i++) {
// pizzaRestaurant.menusArray.menus.lunch[i]+1
// }
// return menusArray 
// }





module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}