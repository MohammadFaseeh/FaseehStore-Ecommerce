import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  // Now for getting data from LocalStorage we call funtion
  let arrLocalStorageProduct = getCartProductFromLS();

  // Which card is selected by user based on ID
  const currentProdElem = document.querySelector(`#card${id}`);
  // console.log(currentCardElem);

  // Get the product quantity Element
  let productQuantity =
    currentProdElem.querySelector(".productQuantity").innerText;
  //console.log(productQuantity);

  // Get the product price Element
  let price = currentProdElem.querySelector(".productPrice").innerText;

  // console.log(productQuantity, price);

  // Remove the currency symbol (`Rs`) from the product price.
  price = price.replace("Rs", "");

  // Handle Duplicate Values of existing Products
  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  // If duplicate found and quantity is greater than 1, update the quantity and price of the existing item in the cart.
  if (existingProd && productQuantity > 1) {
    productQuantity = Number(existingProd.productQuantity) + Number(productQuantity);
    price = Number(price * productQuantity);
    // Create an object containing the product `id`, updated `quantity`, and updated `price`
    let updateCart = { id, productQuantity, price };

    // Map through the existing cart items and update the quantity and price of the matching product.
    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });
    console.log(updateCart);
    // Convert Cart Array to JSON and Store in Local Storage
    localStorage.setItem(
      "cartProductLS",
      JSON.stringify(updateCart)
    );
    // show toast when added product
    showToast("add", id);
  }

  // if find duplicate
  if (existingProd) {
    return false;
  }

  // Calculate Total Price
  price = Number(price * productQuantity);

  // change productQuantity from string to number
  productQuantity = Number(productQuantity);

  // Create an object containing the product `id`, `quantity`, and updated `price`
  let updateCart = { id, productQuantity, price };

  // Push the product object to the existing cart array
  arrLocalStorageProduct.push(updateCart);

  // Convert Cart Array to JSON and Store in Local Storage
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // Now for the value updating in cart Button in navbar
  updateCartValue(arrLocalStorageProduct);
  
  // Show toast when product added to the cart
  showToast("add", id);
};
