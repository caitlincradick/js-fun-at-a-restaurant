function createRestaurant (restaurantName) {
var restaurant = {
  name:restaurantName,  
  menus:{
    breakfast:[],
    lunch: [],
    dinner: []
 }
} 
return restaurant
}

function addMenuItem(pizzaRestaurant, pizza) {
  pizzaRestaurant.menus.lunch.push(pizza)

}





module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}