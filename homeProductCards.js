import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homequantitytoggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

// Check for Product Availability
export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  // Iterate over each products
  products.forEach((curProd) => {
    const { id, name, category, description, image, price, stock } = curProd;

    // clone the product
    const productClone = document.importNode(productTemplate.content, true);

    //   check which card is select for (+ & -) in toggle
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    //   each product card attributes
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `Rs${price}`;
    productClone.querySelector(".productActualPrice").textContent = `Rs${
      price * 4
    }`;
    productClone.querySelector(".productStock").textContent = stock;

    // event listner for toggle + and -
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    //   event listner for add to cart button
    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(productClone);
  });
};
