import { getCartProductFromLS } from "./getCartProducts";

export const incrementdecrement = (event, id, stock, price) => {
    // Which card is selected by user based on ID
  const currentCardElement = document.querySelector(`#card${id}`);

  // Get the product quantity element
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

//   Get data from localStorage
let localCartProducts = getCartProductFromLS();
};