/**
 * Adds a product to the cart stored in local storage.
 * @param {number} productId - The id of the product to be added to the cart.
 */
function addToCart(productId) {
  let product = products.find((p) => p.id === productId);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // check if product is already in cart
  if (cart.some((p) => p.id === productId)) {
    alert(`${product.name} is already in your cart!`);
    return;
  }

  product = { ...product, quantity: 1 };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload(); // Refresh the page to update the cart
  alert(`${product.name} has been added to your cart!`);
}
