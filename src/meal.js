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

// function addIngredients (ingredientName, numOfIngredients) {
// var ingredients = [
//   ingredientName: ingredientName
//   numOfIngredients: numOfIngredients
// ];
// } 
// addIngredients ('cheese', 1)

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


