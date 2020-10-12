function createRestaurant (restaurantName) {
    var restaurant = {
      name: restaurantName,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
      },
    };
    return restaurant;

}

function addMenuItem (restaurantName, menuItem) {
  if(menuItem.type == 'lunch' && restaurantName.menus.lunch.includes(menuItem) == false) {
      restaurantName.menus.lunch.push(menuItem);
  } else if(menuItem.type == 'breakfast' && restaurantName.menus.breakfast.includes(menuItem) == false) {
    restaurantName.menus.breakfast.push(menuItem);
  } else if(menuItem.type == 'dinner' && restaurantName.menus.dinner.includes(menuItem) == false){
    restaurantName.menus.dinner.push(menuItem);
  };
}


function removeMenuItem (restaurantName, menuItem, menuType) {
  var menuTypeArray = restaurantName.menus[menuType];

  for(var i = 0; i < menuTypeArray.length; i++) {
    if(menuItem === menuTypeArray[i].name) {
      menuTypeArray.splice(i, 1);

      return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
    }

  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
