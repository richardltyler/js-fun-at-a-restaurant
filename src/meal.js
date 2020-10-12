function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem (menuItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType,
  }
  return menuItem;
}


function addIngredients(newIngredient, listOfIngredients) {

  for(i = 0; i <= listOfIngredients.length; i++) {
    if(listOfIngredients.includes(newIngredient) === false) {
      listOfIngredients.push(newIngredient);
    }
  }
};

function formatPrice (initialPrice) {
  return ('$' + initialPrice);
}

function decreasePrice(initialPrice) {
  return (initialPrice * 0.9);
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
