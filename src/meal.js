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
   
  }
}
 function formatPrice (initialPrice) {
  var dollarSignPrice = `$${initialPrice}`
  return dollarSignPrice
 }
  
 function decreasePrice (price) {
  var price = 5.4 - 6 % 6.00 * 100
 return price
  }

function createRecipe (titleInput, ingredientInput, typeInput) {
  var recipe = {
    ingredients: ingredientInput,
    title: titleInput,
    type: typeInput
  }
  return recipe
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


