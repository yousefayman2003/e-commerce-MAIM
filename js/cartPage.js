document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.getElementById("cart-container");

  // Retrieve cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if cart is empty
  if (cartItems.length === 0) {
    cartContainer.innerHTML = `
            <h2>Your cart is empty!</h2>
            <p><a href="shop.html" id="back">Go to Shop</a></p>
        `;
  } else {
    let cartContent = `
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                </tr>
        `;

    // Loop through cart items and generate HTML
    cartItems.forEach((item) => {
      cartContent += `
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="${item.image}" alt="${item.name}">
                            <div>
                                <p>${item.name}</p>
                                <small>${item.currency} ${item.price}</small>
                                <br>
                                <a href="#" class="remove-item" data-id="${
                                  item.id
                                }">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="${
                      item.quantity
                    }" min="1" data-id="${
        item.id
      }" class="update-quantity"></td>
                    <td>${item.currency} ${item.price * item.quantity}</td>
                </tr>
            `;
    });

    cartContent += `
  </table>
  <div class="total-price">
    <table>
      <tr>
        <td>Sub Total</td>
        <td>USD ${calculateSubTotal(cartItems)}</td>
      </tr>
      <tr>
        <td>Tax</td>
        <td>USD ${calculateTax(cartItems)}</td>
      </tr>
      <tr>
        <td>Grand Total</td>
        <td>USD ${calculateGrandTotal(cartItems)}</td>
      </tr>
    </table>
  </div>
  <div class="checkout-container">
    <button id="checkout-btn">Checkout</button>
  </div>
`;

    cartContainer.innerHTML = cartContent;

    // Add event listener for checkout button
    document.getElementById("checkout-btn").addEventListener("click", () => {
      handleCheckout();
    });

    // Add event listeners to "Remove" buttons and quantity inputs
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", removeItemFromCart);
    });

    document.querySelectorAll(".update-quantity").forEach((input) => {
      input.addEventListener("change", updateItemQuantity);
    });
  }

  function handleCheckout() {
    alert("Proceeding to checkout!");
    window.location.href = "checkout.html";
  }

  // Function to calculate subtotal
  function calculateSubTotal(cartItems) {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Function to calculate tax (assuming a 10% tax rate)
  function calculateTax(cartItems) {
    return (calculateSubTotal(cartItems) * 0.01).toFixed(2);
  }

  // Function to calculate grand total (subtotal + tax)
  function calculateGrandTotal(cartItems) {
    return (
      parseFloat(calculateSubTotal(cartItems)) +
      parseFloat(calculateTax(cartItems))
    ).toFixed(2);
  }

  // Function to remove an item from the cart
  function removeItemFromCart(event) {
    const itemId = event.target.getAttribute("data-id");
    cartItems = cartItems.filter((item) => item.id !== parseInt(itemId));
    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload(); // Refresh the page to update the cart
  }

  // Function to update item quantity in the cart
  function updateItemQuantity(event) {
    const itemId = event.target.getAttribute("data-id");
    const newQuantity = event.target.value;

    cartItems = cartItems.map((item) => {
      if (item.id === parseInt(itemId)) {
        item.quantity = parseInt(newQuantity);
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload(); // Refresh the page to update the cart
  }
});
