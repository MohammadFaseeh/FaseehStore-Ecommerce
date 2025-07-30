import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (event, id, stock) => {
  // Now for getting data from LocalStorage we call funtion
  let arrLocalStorageProduct = getCartProductFromLS();

  // Which card is selected by user based on ID
  const currentCardElement = document.querySelector(`#card${id}`);
  // console.log(currentCardElement);

  // Get the product quantity element
  let productQuantity =
    currentCardElement.querySelector(".productQuantity").innerText;
  //console.log(productQuantity);

  // Get the product price element
  let price = currentCardElement.querySelector(".productPrice").innerText;

  // console.log(productQuantity, price);

  // Remove the currency symbol (`Rs`) from the product price.
  price = price.replace("Rs", "");

// Calculate Total Price
price = price * productQuantity;

// change productQuantity from string to number
productQuantity = Number(productQuantity);

// Create an object containing the product `id`, `quantity`, and updated `price`
let updateCart = {id, productQuantity, price};

// Push the product object to the existing cart array
arrLocalStorageProduct.push(updateCart);

// Convert Cart Array to JSON and Store in Local Storage
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

// Now for the cart Button in navbar value updating
updateCartValue(arrLocalStorageProduct);
};
