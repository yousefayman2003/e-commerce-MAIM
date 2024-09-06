# E-Commerce Website
An e-commerce website built using HTML, CSS, and JavaScript, offering users a seamless shopping experience. The project includes features like user registration and login, a shopping cart with item count, and dynamic product rendering.

## Features
- User Registration & Login: Users can register and log in with credentials stored in localStorage.
- Shopping Cart: A cart system that dynamically updates with the number of items displayed in a badge.
- Dynamic Product Listing: Products are dynamically rendered on the page based on available data.
- Checkout Process: A simple checkout form where users can submit their shipping and payment details.
- Responsive Design: The website is fully responsive and adapts to various screen sizes.

### Installation
1. Clone the repository:
```
git clone https://github.com/yousefayman2003/ecommerce-website-MAIM.git
cd ecommerce-website-MAIM
```
2. Open the project:
Open `index.html` in your web browser.

## File Structure
```
ecommerce-website/
│
├── index.html               # Home page
├── shop.html                # Shop page listing all products
├── cart.html                # Cart page showing added items
├── contact.html             # Contact page
├── account.html             # Account registration and login
├── checkout.html            # Checkout form page
├── style.css                 # Main stylesheet
├── js/
│   ├── account.js           # User registration and login functionality
│   ├── addToCart.js         # Functionality for adding products to cart
│   ├── backToTop.js         # Back to top button functionality
│   ├── cartPage.js          # Cart-related functionality
│   ├── checkout.js          # Checkout page functionality
│   ├── contact.js           # Contact page functionality
│   ├── load.js              # Page loading control
│   ├── menuToggle.js        # Menu toggle functionality
│   ├── script.js            # General site-wide functionality
│   ├── updateCartCount.js   # Updates the cart item count
└── README.md                # This README file
```
## Features Overview
1. User Authentication
Users can register and log in using the account page. User credentials are saved in localStorage, and login credentials are verified against stored data.

2. Shopping Cart
Items can be added to the cart from the shop page.
The cart displays the number of items with a badge on the navigation bar.
The cart page allows users to view, edit, and delete items.

4. Dynamic Product Rendering
Products are dynamically rendered on the shop page based on a predefined list. If no products match the criteria, a message is shown with a link to return to the shop.

5. Checkout Process
Users can fill in their shipping and payment information in the checkout form. Form validation ensures all fields are filled before submission.

6. Responsive Design
The website is responsive, ensuring usability across a variety of devices, from desktops to mobile phones.

## How It Works
1. Registration & Login:

- Registration form collects the username, email, and password.
- User credentials are stored in localStorage.
- During login, the credentials are checked against the stored data, and if successful, the user is logged in.

  
2. Cart Functionality:
- Products can be added to the cart via `localStorage`.
- A pink circle on the cart icon displays the number of items in the cart.
- The cart page allows users to view and manage their cart items.
  
3. JavaScript Execution Order:
- The page content is hidden until all JavaScript files have been loaded and executed, ensuring a smooth user experience.
