import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");
  let initialValue = 0;
  // Retrieve the array of products stored in localStorage
  let localCartProducts = getCartProductFromLS();
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0; // Ensure price is a number
    return accum + productPrice;
  }, initialValue);
  // console.log("Total Product Price:", totalProductPrice);
  // Update the subtotal and final total in the cart
  productSubTotal.textContent = `Rs${totalProductPrice}`;
  productFinalTotal.textContent = `Rs${totalProductPrice + 50}`; // Assuming a fixed tax of Rs50
};
