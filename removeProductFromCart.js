import { getCartProductFromLS } from "./getCartProducts";

export const removeProductFromCart = (id) => {
    // Retrieve the current cart products from localStorage
    let cartProducts = getCartProductFromLS();
    
    // Filter out the product with the specified ID
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    
    // Update the localStorage with the new cart products
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    // reload the page to reflect changes in the cart
    location.reload();
};