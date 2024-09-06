// Handle the registration form submission
document.getElementById("RegForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }
  if (!email) {
    alert("Please enter your email address.");
    return;
  }
  if (!password) {
    alert("Please enter your password.");
    return;
  }
  // Store user data in localStorage
  const userData = { username, email, password };
  localStorage.setItem(username, JSON.stringify(userData));

  alert("Registration successful! You can now log in.");
  // Optionally, switch to login form
  login();
});

// Handle the login form submission
document
  .getElementById("LoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem(username);

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (userData.password === password) {
        alert("Login successful!");
        // Redirect to a new page or update the UI
      } else {
        alert("Incorrect password. Please try again.");
      }
    } else {
      alert("Username not found. Please register first.");
    }
  });

// Functions to toggle between login and registration forms
function login() {
  document.getElementById("LoginForm").style.display = "block";
  document.getElementById("RegForm").style.display = "none";
}

function register() {
  document.getElementById("LoginForm").style.display = "none";
  document.getElementById("RegForm").style.display = "block";
}
