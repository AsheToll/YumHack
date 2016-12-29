angular.module('starter.services', [])

.factory('Menus', function() {
  // Might use a resource here that returns a JSON array

  var menus = [{
        id: 0,
        restaurant: 'Chick-fil-A',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 1,
        restaurant: 'Chipotle',
        logo: 'img/chipotle.svg'
    }, {
        id: 2,
        restaurant: 'Shake Shack',
        logo: '/img/shakeshack.jpg'
    }, {
        id: 3,
        restaurant: 'Starbucks',
        logo: '/img/starbucks.svg.png'
    }, 
        /* Chick-fil-A - 5 */        
    {
        id: 4,
        restaurant: 'Chick-fil-A',
        name: 'Buffalo Chicken Sandwich',
        image: '/img/cfa/8.png',
        order: 'Ask for Buffalo Sauce on your Spicy Chicken Sandwich',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 5,
        restaurant: 'Chick-fil-A',
        name: 'Chicken Quesadilla',
        image: '/img/cfa/4.png',
        order: 'Ask if they make a Chicken Quesadilla. Not all locations will be able to.',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 6,
        restaurant: 'Chick-fil-A',
        name: 'Free IceDream',
        image: '/img/cfa/6.png',
        order: 'Ask to replace your Kid\'s Meal toy with an Ice Dream.',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 7,
        restaurant: 'Chick-fil-A',
        name: 'Fried Chicken Club',
        image: '/img/cfa/7.png',
        order: 'Ask if they can swap out the char-broiled chicken with a piece of fried chicken.',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 8,
        restaurant: 'Chick-fil-A',
        name: 'Root Beer Float',
        image: '/img/cfa/1.png',
        order: 'Ask them to add vanilla ice dream to your root beer.',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 9,
        restaurant: 'Chick-fil-A',
        name: 'Spicy Char',
        image: '/img/cfa/3.png',
        order: 'Ask for a Spicy Char-Grilled Chicken Patty instead of the regular Char-Grilled Chicken Patty.',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 10,
        restaurant: 'Chick-fil-A',
        name: 'Spicy Chicken, Egg, & Cheese Biscuit',
        image: '/img/cfa/2.png',
        order: 'Ask for The Spicy Chicken, Egg, & Cheese Biscuit.',
        logo: 'img/ChickFilA/cfa.jpg'
    }, {
        id: 11,
        restaurant: 'Chick-fil-A',
        name: 'Strawberry Peach Hand-Spun Milkshake',
        image: '/img/cfa/5.png',
        order: 'Ask to add strawberry to your Peach Hand-Spun Milkshake.',
        logo: 'img/ChickFilA/cfa.jpg'
    },
    /* Chipotle - 13 */
    {
        id: 12,
        restaurant: 'Chipotle',
        name: 'Burritodilla',
        image: '/img/chip/burritodilla.png',
        order: 'Ask for a burrito - with half the amount of fillings so that it won\'t overflow - to be grilled up like a quesadilla.',
        logo: 'img/chipotle.svg'
    }, {
        id: 13,
        restaurant: 'Chipotle',
        name: 'Nachos',
        image: '/img/chip/nachos.png',
        order: 'Ask for a Burrito Bowl with chips instead of rice.',
        logo: 'img/chipotle.svg'
    }, {
        id: 14,
        restaurant: 'Chipotle',
        name: 'Quesadilla',
        image: '/img/chip/quesadilla.png',
        order: 'Ask for a quesadilla.',
        logo: 'img/chipotle.svg'
    }, {
        id: 15,
        restaurant: 'Chipotle',
        name: 'Quesarito',
        image: '/img/chip/quesarito.png',
        order: 'Ask for a Cheese Quesadilla to be used as the shell for your burrito.',
        logo: 'img/chipotle.svg'
    }, {
        id: 16,
        restaurant: 'Chipotle',
        name: 'Single Taco',
        image: '/img/chip/taco.png',
        order: 'Ask for a single taco.',
        logo: 'img/chipotle.svg'
    },
    /* Shake Shack - 18 */
    {
        id: 17,
        restaurant: 'Shake Shack',
        name: 'Peanut Butter & Bacon ShackBurger',
        image: '/img/ss/pbnb.png',
        order: 'Ask for peanut sauce on the side of your Bacon Shackburger - then pour over your burger.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 18,
        restaurant: 'Shake Shack',
        name: 'The Smoke Shack Quad Burger',
        image: '/img/ss/quad.png',
        order: 'Ask for it by name.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 19,
        restaurant: 'Shake Shack',
        name: 'Shack-Cago Burger',
        image: '/img/ss/cago.png',
        order: 'Order the Chicago style hotdog and transfer the toppings to your burger.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 20,
        restaurant: 'Shake Shack',
        name: 'Grilled Cheese Sandwich',
        image: '/img/ss/grilledcheese.png',
        order: 'Order by name and have the option of bacon on the side.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 21,
        restaurant: 'Shake Shack',
        name: 'The Shandy',
        image: '/img/ss/Shandy.png',
        order: 'Order by name - if your location is unfamiliar with it, ask for some beer in your lemonade.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 22,
        restaurant: 'Shake Shack',
        name: 'Chili Pepper Cheese Fries',
        image: '/img/ss/fries.png',
        order: 'Ask for chili peppers on your cheese fries.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 23,
        restaurant: 'Shake Shack',
        name: 'Protein Style Burger',
        image: '/img/ss/proteinstyle.png',
        order: 'Ask for it "protein style" - or without the bun - and they\'ll wrap it in lettuce.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 24,
        restaurant: 'Shake Shack',
        name: 'Ice Cream Sandwich',
        image: '/img/ss/ics.png',
        order: 'Ask for toasted buns on the side of your ice cream - then smash the ice cream between those buns.',
        logo: 'img/shakeshack.jpg'
    }, {
        id: 25,
        restaurant: 'Shake Shack',
        name: 'Beer Float',
        image: '/img/ss/rbf.png',
        order: 'Order a beer and ask for a scoop of your favorite custard to be added in.',
        logo: 'img/shakeshack.jpg'
    },
    /* Starbucks - 27 */
    {
        id: 26,
        restaurant: 'Starbucks',
        name: 'Cotton Candy Frappuccino',
        image: '/img/starbucks/cc.png',
        order: 'Ask for a Vanilla Bean Frappuccino with Raspberry Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 27,
        restaurant: 'Starbucks',
        name: 'Cookie Dough Frappuccino',
        image: '/img/starbucks/cd.png',
        order: 'Ask for a Cinnamon Dolce Creme Frappuccino with Mocha Syrup - 1 pump for tall, 2 pumps for grande, and 3 pumps for venti - java chips blended in, and top with cookie crumble and chocolate whip.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 28,
        restaurant: 'Starbucks',
        name: 'Twix Frappuccino',
        image: '/img/starbucks/twix.png',
        order: 'Ask for a Caramel Frappuccino with Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - java chips and whipped cream blended in, coat the cup with caramel sauce, and top with mocha drizzle.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 29,
        restaurant: 'Starbucks',
        name: 'Red Velvet Frappuccino',
        image: '/img/starbucks/rv.png',
        order: 'Ask for a half White Mocha/half regular Mocha Frappuccino with Raspberry Syrup - 1 pump for tall, 2 pumps for grande, and 3 pumps for venti.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 30,
        restaurant: 'Starbucks',
        name: 'Butterbeer Frappuccino',
        image: '/img/starbucks/bb.png',
        order: 'Ask for a Creme Frappuccino - WHOLE MILK IS NEEDED FOR THE RIGHT CONSISTENCY - with 3 pumps of Caramel Syrup, 3 pumps of Toffee Nut Syrup, and topped with caramel drizzle.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 31,
        restaurant: 'Starbucks',
        name: 'S\'mores Frappuccino',
        image: '/img/starbucks/smores.png',
        order: 'Ask for a Double Chocolate Chip or Java Chip Frappuccino with 1 pump of Cinnamon Dolce Syrup, 1 pump of Toffee Nut Syrup, whipped cream blended in, and topped with whipped cream and Cinnamon Dolce sprinkles.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 32,
        restaurant: 'Starbucks',
        name: 'Ferrero Rocher Frappuccino',
        image: '/img/starbucks/fr.png',
        order: 'Ask for a Java Chip or Double Chocolate Chip Frappuccino with Mocha Syrup - 2 pumps for tall, 3 pumps for grande, and 3.5 pumps for venti - Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - add Hazelnut drizzle, and top with whipped cream.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 33,
        restaurant: 'Starbucks',
        name: 'Birthday Cake Frappuccino',
        image: '/img/starbucks/bc.png',
        order: 'Ask for a Vanilla Bean Frappuccino with Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti. Not all Starbucks locations do this, but you also have the option of asking them to blend a cake pop into your Vanilla Bean Frappuccino.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 34,
        restaurant: 'Starbucks',
        name: 'Oreo Frappuccino',
        image: '/img/starbucks/oreo.png',
        order: 'Ask for a Double Chocolate Chip Frappuccino with white mocha sauce instead of regular mocha, and topped with chocolate or regular whipped cream. Alternatively, if you\'d prefer more creme than chocolate cookie flavor, ask for a Vanilla Bean Frappuccino with java chips blended in and topped with mocha syrup and/or cookie crumbles.',
        logo: 'img/starbucks.svg.png'
    }, {
        id: 35,
        restaurant: 'Starbucks',
        name: 'Cap\'n Crunch Frappuccino',
        image: '/img/starbucks/cap.png',
        order: 'Ask for a Strawberry and Creme Frappuccino with Caramel Syrup - 1/2 pump for tall, 1 pump for grande, and 1.5 pumps for venti - Toffe Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - Hazelnut Syrup - 1/2 pump for tall, 1 pump for grande, and 1.5 pumps for venti. You can also ask for java chips if you\'d like some crunch.',
        logo: 'img/starbucks.svg.png'
}];

  return {
    all: function() {
      return menus;
    },
    remove: function(menu) {
      menus.splice(menus.indexOf(menu), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].id === parseInt(menuId)) {
          return menus[i];
        }
      }
      return null;
    }
  };
});
