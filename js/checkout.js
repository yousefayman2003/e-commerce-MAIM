document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const paymentMethod = document.getElementById("payment-method").value;

    if (!name || !email || !address || !paymentMethod) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Thank you for your order!");

    // Clear cart
    localStorage.removeItem("cart");
    // Redirect after a slight delay
    setTimeout(function () {
      window.location.href = "index.html";
    }, 100);
  });
