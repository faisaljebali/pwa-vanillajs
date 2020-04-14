const container = document.querySelector(".container");
const recipes = [
  {
    name: "Best Chocolate Chip Cookies",
    description: "Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.",
    image: "images/recipe1.jpg"
  },
  {
    name: "Brown Sugar Banana Bread",
    description: "Place the bananas into a large plastic zipper bag, seal the bag, and smoosh the bananas with your fingers until very well mashed. Set the bananas aside. Place the brown sugar and butter into a mixing bowl, and mix on medium speed with an electric mixer until light and fluffy, 1 to 2 minutes. Cut a corner from the plastic bag, and squeeze the mashed bananas into the bowl of brown sugar mixture. With the electric mixer on medium speed, beat in the bananas, egg, cinnamon, vanilla extract, and milk until the mixture is well combined. Switch the mixer to low speed, and gradually beat in the flour, baking soda, baking powder, and kosher salt just until the batter is smooth, about 1 minute. Spread the batter into the prepared loaf pan.",
    image: "images/recipe2.jpg"
  },
  {
    name: "Cheesecake Pops",
    description: "Cake pops are a fun versatile party food. Learn techniques for making cake pops with a variety of recipes and become inspired with clever decorating ideas.",
    image: "images/recipe3.jpg"
  },
  {
    name: "Chicken Soup with Drop-In Noodles",
    description: "Chicken soup that you can let simmer in a slow cooker all day then make homemade drop noodles just before serving. Quick and easy.",
    image: "images/recipe4.jpg"
  },
  {
    name: " Tortilla Soup II",
    description: "You may thicken soup by adding the desired amount of tomato paste to the soup or extend the recipe by adding one 10-ounce can of tomato soup. Garnish with shredded Monterey Jack cheese and the tortilla strips.",
    image: "images/recipe5.jpg"
  },
  {
    name: " Copycat Panera® Broccoli Cheddar Soup",
    description: "My husband loves Panera® broccoli cheddar soup but it went up in price and therefore we set out on a hunt to create the perfect broccoli cheddar soup. Here is what we came up with. There are tons of variations and options to make this soup your own. You can add extra veggies, different cheeses, garlic to your onions, a little nutmeg to the finished soup, green onions, sour cream, etc. The list goes on and on. Make it your own! Serve topped with cheese!",
    image: "images/recipe6.jpg"
  },

];
const getRecipes = () => {
  let output = "";
  recipes.forEach(
    ({ name,description, image }) =>
      (output += `
              <div class="item-flex">
                <img class="item-avatar" src=${image} />
                <h1 class="item-title">${name}</h1>
                <p>${description}</p>
                <a class="item-link" href="#">Read More</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", getRecipes);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log(err));
  });
}