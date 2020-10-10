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

};

module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
