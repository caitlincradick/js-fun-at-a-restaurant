function nameMenuItem(name) {
return `Delicious ${name}`
}
nameMenuItem('pizza')



function createMenuItem (menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem
}
createMenuItem ('burrito', 1.99, 'lunch')

function addIngredients (ingredientName, numOfIngreditent) {
var ingredients = [
];
} 


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


