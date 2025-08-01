import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  // Which card is selected by user based on ID
  const currentCardElement = document.querySelector(`#card${id}`);

  // Get the product Product elements
  const quantity = currentCardElement.querySelector(".productQuantity");

  const productPrice = currentCardElement.querySelector(".productPrice");

  let productQuantity = 1;
  let localStoragePrice = 0;

  //   ----------------------------------------
  //   Get the data from localStorage
  //   ----------------------------------------
  let localCartProducts = getCartProductFromLS();

  // Check duplicate product in localStorage
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);
  // If product exists in localStorage, get its quantity and price
  if (existingProd) {
    productQuantity = existingProd.productQuantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (productQuantity < stock) {
      productQuantity += 1;
    } else if (productQuantity === stock) {
      productQuantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (productQuantity > 1) {
      productQuantity -= 1;
    }
  }

  //   finally update the price in local storage
  localStoragePrice = price * productQuantity;
  localStoragePrice = Number(localStoragePrice);
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  // Create an object containing the product `id`, updated `quantity`, and updated `price`
  let updateCart = { id, productQuantity, price: localStoragePrice };

  // Map through the existing cart items and update the quantity and price of the matching product.
  updateCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updateCart : curProd;
  });
  // Convert Cart Array to JSON and Store in Local Storage
  localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
  quantity.innerText = productQuantity;
  productPrice.innerText = localStoragePrice;
  
  // Update the total price in the cart using toggle 
  updateCartProductTotal();
};
