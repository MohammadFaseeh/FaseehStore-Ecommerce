import products from "./api/products.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementdecrement } from "./incrementdecrement";
import { removeProductFromCart } from "./removeProductFromCart";

// Retrieve the array of products stored in localStorage
let cartProducts = getCartProductFromLS();

//  Filter the full list of products to only include those that are in the user's cart
let filteredProducts = products.filter((curProd) => {
  // Check if the current product exists in the cart by comparing IDs
  return cartProducts.some((cartProduct) => cartProduct.id === curProd.id);
});

// ----------------------------------------------------
// Now to display the filtered products in the cart
// ----------------------------------------------------

// Select the container where displayed
const cartElement = document.querySelector("#productCartContainer");

// Select the product card template
const templateContainer = document.querySelector("#productCartTemplate");

const showCartproducts = () => {
  // Loop through each filtered cart product and display it
  filteredProducts.forEach((curProd) => {
    const { id, name, category, image, price, productQuantity } = curProd;
    // Clone the template content
    const productClone = document.importNode(templateContainer.content, true);

    // Function to get the product data from localStorage
    const LsActalData = fetchQuantityFromLS(id, price);

    // Fill in the product details
    // Optionally store product id in the card for later use (e.g., for remove button)
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productQuantity").textContent =
      LsActalData.productQuantity;
    productClone.querySelector(".productPrice").textContent = LsActalData.price;
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        // Call the function to remove the card from the cart
        removeProductFromCart(id);
      });

    // event listner for toggle + and -
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementdecrement(event, id, stock,price);
      });

    // Append the card to the container
    cartElement.appendChild(productClone);
  });
};
showCartproducts();
