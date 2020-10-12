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

function removeMenuItem () {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
