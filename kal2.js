let cartCount = 0;

function addToCart() {

    // Increase cart number
    cartCount++;

    // Display the new cart number
    document.getElementById("cart-count").innerText = cartCount;

    // Show a message
    alert("Shoe added to cart!");
}