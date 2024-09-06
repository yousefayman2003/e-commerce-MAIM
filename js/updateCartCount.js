// Function to update the cart count
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cartItems.length;
}

// Call the function to set the initial cart count
updateCartCount();
