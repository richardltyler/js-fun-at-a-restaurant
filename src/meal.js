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

var ingredients = [];

function addIngredients(newIngredient, array) {
  var duplicateIngredient = '';

  for(i = 0; i <= array.length; i++) {
    if(newIngredient === array[i]) {
    duplicateIngredient += array[i];
    }
  };
  //figured out for loop will only make duplicateIngredient check whatever the last index is
  // console.log('test if for loop is working:', duplicateIngredient);

  if (duplicateIngredient == 0) {
    array.push(newIngredient);
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
