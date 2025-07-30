import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
    // get cart Products from the local-storage which is in cartProductLS and store in variable cartProducts
    let cartProducts = localStorage.getItem("cartProductLS");
    // Check for null or undefined cart products
    if(!cartProducts){
        return[];
    }
    // if have data beacuse the data in JSON form so we parse cart products
    cartProducts = JSON.parse(cartProducts);

    // Now for the value updating in cart Button in navbar
    updateCartValue(cartProducts);

    // Now return cart Product to where function getCartProductFromLS called
    return cartProducts;
}