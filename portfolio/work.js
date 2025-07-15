let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
  cartCount++;
  cartTotal += price;

  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("cartTotal").textContent = cartTotal;
}
