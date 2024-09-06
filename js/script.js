const products = [
  {
    id: 1,
    name: "CANON EOS 1D X Mark III - body",
    image: "./photos/canonmarkiii.jpg",
    rating: 4.0,
    price: 100,
    currency: "USD",
    link: "product-details.html",
    description:
      "The Canon EOS 1D X Mark III is a high-performance DSLR camera with a 20.1 MP full-frame CMOS sensor and advanced AF system. Ideal for professional photographers needing fast and reliable performance in various conditions.",
    category: "Cameras",
  },
  {
    id: 2,
    name: "Nikon D6",
    image: "./photos/Nikond6.jpg",
    rating: 4.5,
    price: 250,
    currency: "USD",
    description:
      "The Nikon D6 is Nikon's flagship DSLR, featuring a 20.8 MP full-frame sensor, powerful autofocus, and robust build quality. Perfect for sports, wildlife, and news photographers who demand speed and precision.",
    category: "Cameras",
  },
  {
    id: 3,
    name: "SAMYANG 35 mm f/1,8 AF FE pro Sony E",
    image: "./photos/sonylen.png",
    rating: 4.0,
    price: 300,
    currency: "USD",
    description:
      "The Samyang 35 mm f/1.8 AF FE lens offers superb image quality and a compact design for Sony E-mount cameras. A versatile prime lens great for street, portrait, and everyday photography.",
    category: "Lenses",
  },
  {
    id: 4,
    name: "ROLLEI C6i",
    image: "./photos/triport.jpg",
    rating: 3.5,
    price: 140,
    currency: "USD",
    description:
      "The Rollei C6i is a lightweight and versatile tripod designed for both photographers and videographers. It features a 3-way head and a maximum load capacity of 12 kg, making it ideal for outdoor shoots.",
    category: "Accessories",
  },
  {
    id: 5,
    name: "PANASONIC HC-X1",
    image: "./photos/panasonic_hc-x1.jpg",
    rating: 4.0,
    price: 100,
    currency: "USD",
    description:
      "The Panasonic HC-X1 is a professional 4K camcorder with a 20x optical zoom lens and advanced features for high-quality video production. It is designed for filmmakers and content creators who need exceptional video quality.",
    category: "Camcorders",
  },
  {
    id: 6,
    name: "PANASONIC HC-VX1",
    image: "./photos/panasonic_HC_VX1.jpg",
    rating: 4.5,
    price: 50,
    currency: "USD",
    description:
      "The Panasonic HC-VX1 is a 4K camcorder that delivers stunning video quality with its large sensor and advanced features. It's an excellent choice for videographers looking for portability and high resolution.",
    category: "Camcorders",
  },
  {
    id: 7,
    name: "DJI MAVIC 2 Zoom",
    image: "./photos/djimavic2zoom.jpg",
    rating: 4.0,
    price: 96,
    currency: "USD",
    description:
      "The DJI Mavic 2 Zoom is a powerful drone with a 2x optical zoom camera, allowing for dynamic perspectives and cinematic shots. It's perfect for aerial photography and videography enthusiasts.",
    category: "Drones",
  },
  {
    id: 8,
    name: "ZEISS Loxia 85 mm f/2,4 Sonnar pro Sony E",
    image: "./photos/zeissloxia.jpg",
    rating: 3.5,
    price: 300,
    currency: "USD",
    description:
      "The ZEISS Loxia 85 mm f/2.4 Sonnar lens offers exceptional sharpness and clarity for portrait and landscape photography. Designed for Sony E-mount cameras, it's a must-have for professionals seeking top-tier optical performance.",
    category: "Lenses",
  },
  {
    id: 9,
    name: "TOKINA 16-28 mm T3 Cinema ATX pro Canon EF",
    image: "./photos/tokina.jpg",
    rating: 4.0,
    price: 450,
    currency: "USD",
    description:
      "The Tokina 16-28 mm T3 Cinema ATX is a high-quality wide-angle lens designed for Canon EF mount cameras. It offers superb performance in cinematic video production, making it ideal for filmmakers.",
    category: "Lenses",
  },
  {
    id: 10,
    name: "CANON EOS C300 Mark III",
    image: "./photos/canonc300.jpg",
    rating: 4.5,
    price: 500,
    currency: "USD",
    description:
      "The Canon EOS C300 Mark III is a professional cinema camera with a 4K Super 35mm DGO sensor, offering incredible image quality and versatility for film and TV production.",
    category: "Cameras",
  },
  {
    id: 11,
    name: "GITZO Adventury 30 L",
    image: "./photos/gitzo.jpg",
    rating: 4.0,
    price: 180,
    currency: "USD",
    description:
      "The Gitzo Adventury 30 L is a premium camera backpack designed for outdoor photographers. It provides ample space and protection for your gear, making it an excellent companion for adventurous shoots.",
    category: "Accessories",
  },
  {
    id: 12,
    name: "SONY PXW-FX9",
    image: "./photos/sonyPxW-FX9.jpg",
    rating: 3.5,
    price: 900,
    currency: "USD",
    description:
      "The Sony PXW-FX9 is a cutting-edge full-frame cinema camera offering 6K resolution and advanced autofocus. Perfect for filmmakers and broadcasters who require superior image quality and flexibility.",
    category: "Cameras",
  },
];

// Add products to the page
const productContainer = document.querySelector(".row");
const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const sortOptions = document.getElementById("sort-options");

// Initial render of all products
renderProducts(products);

/**
 * Render products dynamically based on filters, search, and sorting.
 * @param {Array} productList - The list of products to render.
 */
function renderProducts(productList) {
  const productContainer = document.querySelector(".row");
  productContainer.innerHTML = "";

  // Check if the product list is empty
  if (productList.length === 0) {
    productContainer.innerHTML = `
        <div class="no-products">
          <p>There are no products with these criteria.</p>
          <a href="shop.html">Go back to shop page</a>
        </div>
      `;
  } else {
    // Render products if the list is not empty
    productList.forEach((product) => {
      productContainer.innerHTML += `
          <div class="col-4">
            <a href="#" onclick="AddProductToDetail(${product.id})">
              <img src="${product.image}" alt="${product.name}" />
              <h4>${product.name}</h4>
            </a>
            <div class="rating">
              ${getStars(product.rating)}
            </div>
            <p>${product.currency} ${product.price}</p>
            <button class="btn" id="add-to-cart-btn" onclick="addToCart(${
              product.id
            })">Add to Cart</button>
          </div>
        `;
    });
  }
}

// Filter products based on search input, category, and sort options
function filterAndSortProducts() {
  let filteredProducts = products;

  // Filter by search term
  const searchTerm = searchBar.value.toLowerCase();
  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Sort by selected option
  const sortOption = sortOptions.value;
  if (sortOption === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filteredProducts);
}

// Event listeners for filtering, sorting, and searching, checkout
if (searchBar && categoryFilter && sortOptions) {
  searchBar.addEventListener("input", filterAndSortProducts);
  categoryFilter.addEventListener("change", filterAndSortProducts);
  sortOptions.addEventListener("change", filterAndSortProducts);
}

/**
 * Returns a string of HTML representing a rating given in the range of 1 to 5.
 * The string will contain a mix of solid stars, half stars, and hollow stars to
 * represent the rating.
 * @param {number} rating - The rating to be converted to a string of stars. Must
 * be in the range of 1 to 5.
 * @returns {string} A string of HTML representing the rating as a mix of stars.
 */
function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fa fa-star"></i>';
    } else if (i - rating === 0.5) {
      stars += '<i class="fa fa-star-half-o"></i>';
    } else {
      stars += '<i class="fa fa-star-o"></i>';
    }
  }
  return stars;
}

function AddProductToDetail(productId) {
  const product = products.find((p) => p.id === productId);

  localStorage.setItem("product", JSON.stringify(product));

  window.location.href = "product-details.html";
}

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
