import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromLS = (id, price) => {
  let cartProducts = getCartProductFromLS();
  // Find the product in the cart by its ID
  const existingProduct = cartProducts.find((curProd) => curProd.id === id);
  // If the product is found, return its quantity and price
  let productQuantity = 1;
  if (existingProduct) {
    productQuantity = existingProduct.productQuantity;
    price = existingProduct.price;
  }
  return { productQuantity, price };
};
