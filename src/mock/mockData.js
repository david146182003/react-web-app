export const menuData = {
  menuItems: [
    {
      id: 306187,
      title: "Burger",
      image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
      imageType: "jpg",
      restaurantChain: "Garfield's Restaurant & Pub"
    },
    {
      id: 381778,
      title: "Cowboy Burger",
      image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
      imageType: "jpg",
      restaurantChain: "Sam & Louie's Ny Pizza"
    },
    // ... (more items in the same format)
    {
      id: 268449,
      title: "Gardein Bearnaise Burger w/ French Fries",
      image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
      imageType: "jpg",
      restaurantChain: "Yard House"
    }
  ],
  meta: {
    number: 50,
    offset: 0,
    processingTimeMs: 381,
    totalMenuItems: 3842,
    type: "menuItem"
  }
};

export function mockFetch() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(menuData), 100);
    });
};
