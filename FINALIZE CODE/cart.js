// Define an array to store the cart items
let cart = [];

// Function to handle click events on kill buttons
document.querySelectorAll('.kill-button').forEach(button => {
    button.addEventListener('click', function() {
        let carBox = this.closest('.car-box');
        let carName = carBox.querySelector('h3').innerText;
        let carPriceText = carBox.querySelector('p').innerText;
        let carPrice = parseFloat(carPriceText.replace(/[^\d.-]/g, ''));
        addToCart(carName, carPrice);
    });
});

// Function to add a car to the cart
function addToCart(carName, carPrice) {
    // Create a new cart item object
    let cartItem = {
        name: carName,
        price: carPrice
    };

    // Add the cart item to the cart array
    cart.push(cartItem);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    let cartList = document.querySelector('.cart-list');
    // Clear the current cart display
    cartList.innerHTML = '';

    // Populate the cart display with the items in the cart array
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
    });
}

// JavaScript (ferrari.js)

// Function to add a car to the cart
function addToCart(carName, carPrice) {
    // Create a new list item
    const cartItem = document.createElement('li');
    cartItem.textContent = `${carName} - ${carPrice}`;
    
    // Append the item to the cart list
    const cartList = document.querySelector('.cart-list');
    cartList.appendChild(cartItem);
}

// Function to remove all items from the cart
function clearCart() {
    const cartList = document.querySelector('.cart-list');
    cartList.innerHTML = ''; // Remove all child elements
}

// Function to remove a specific item from the cart
function removeFromCart(index) {
    const cartList = document.querySelector('.cart-list');
    const cartItems = cartList.querySelectorAll('li');
    if (index >= 0 && index < cartItems.length) {
        cartItems[index].remove(); // Remove the specified item
    }
}
