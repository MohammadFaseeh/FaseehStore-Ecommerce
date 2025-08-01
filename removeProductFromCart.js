import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";

export const removeProductFromCart = (id) => {
  // Retrieve the current cart products from localStorage
  let cartProducts = getCartProductFromLS();

  // Filter out the product with the specified ID
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // Update the localStorage with the new cart products
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // Remove product card from the DOM (UI)
  const productElement = document.querySelector(`#card${id}`);
  if (productElement) {
    productElement.remove();

    //show toast when product deleted from the cart
    showToast("delete", id);
  }
  // -----------------------------------------------------
  // calculating the card total in our cartProducts page
  // --------------------------------------------------------
  updateCartProductTotal();

  updateCartValue(cartProducts);
};
