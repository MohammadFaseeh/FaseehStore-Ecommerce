export const homeQuantityToggle = (event, id, stock) => {
  // Which card is selected by user based on ID
  const currentCardElement = document.querySelector(`#card${id}`);
  // console.log(currentCardElement);

  // Get the product quantity element
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  // console.log(productQuantity);

  // Get current quantity from the element or set it to 1
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  console.log(quantity);
  productQuantity.setAttribute("data-quantity", quantity);
  return quantity;
};
