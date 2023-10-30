// JavaScript for the Keyboard Store

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');

let cartItems = [];
let cartTotal = 0;

// Function to update the cart count and display it in the cart icon
function updateCartCount() {
    cartCount.innerText = cartItems.length;
}

// Function to add a product to the cart
function addToCart(event) {
    const button = event.target;
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    cartItems.push({ name, price });
    cartTotal += price;

    updateCartCount();
}

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Add event listener to cart icon to navigate to the checkout page
cartIcon.addEventListener('click', () => {
    // Redirect to the checkout page (replace with the actual URL)
    window.location.href = 'checkout.html';
});
