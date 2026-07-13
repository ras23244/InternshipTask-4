// Copy products array
let filteredProducts = [...products];

// HTML Elements
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const priceFilter = document.getElementById("price");
const sortFilter = document.getElementById("sort");

// Display Products
function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML =
            '<h2 class="no-products">No Products Found</h2>';

        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p><strong>Category:</strong> ${product.category}</p>

                <p class="price">₹${product.price}</p>

                <p class="rating">⭐ ${product.rating}</p>

                <button>Add to Cart</button>

            </div>
        `;

        productContainer.appendChild(card);

    });

}

// Apply Filters
function applyFilters() {

    filteredProducts = [...products];

    // Search
    const searchValue = searchInput.value.toLowerCase();

    if (searchValue !== "") {

        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchValue)
        );

    }

    // Category Filter
    const category = categoryFilter.value;

    if (category !== "all") {

        filteredProducts = filteredProducts.filter(product =>
            product.category === category
        );

    }

    // Price Filter
    const price = priceFilter.value;

    if (price === "500") {

        filteredProducts = filteredProducts.filter(product =>
            product.price < 500
        );

    }
    else if (price === "1000") {

        filteredProducts = filteredProducts.filter(product =>
            product.price >= 500 && product.price <= 1000
        );

    }
    else if (price === "1001") {

        filteredProducts = filteredProducts.filter(product =>
            product.price > 1000
        );

    }

    // Sorting
    const sort = sortFilter.value;

    if (sort === "low") {

        filteredProducts.sort((a, b) => a.price - b.price);

    }
    else if (sort === "high") {

        filteredProducts.sort((a, b) => b.price - a.price);

    }
    else if (sort === "rating") {

        filteredProducts.sort((a, b) => b.rating - a.rating);

    }

    displayProducts(filteredProducts);

}

// Event Listeners
searchInput.addEventListener("keyup", applyFilters);

categoryFilter.addEventListener("change", applyFilters);

priceFilter.addEventListener("change", applyFilters);

sortFilter.addEventListener("change", applyFilters);

// Initial Display
displayProducts(products);