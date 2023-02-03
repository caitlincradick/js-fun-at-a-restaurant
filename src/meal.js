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

 
function addIngredients (topping, ingredients) {
  if (!ingredients.includes(topping)) {
    ingredients.push(topping)
    // console.log(ingredients)
  }
}
 




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


