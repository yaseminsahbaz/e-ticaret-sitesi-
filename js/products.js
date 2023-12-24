let products = [];
let cart = [];

function addToCart() {
  const buttons = [...document.getElementsByClassName("add-to-cart")];
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const id = e.target.dataset.id;
      const findProduct = products.find((product) => product.id === Number(id));
      console.log(findProduct);
      cart.push({ ...findProduct, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
}

products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const productsContainer = document.getElementById("product-list");