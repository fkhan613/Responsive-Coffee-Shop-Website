let navbar = document.querySelector(".navbar");
let cartList = document.querySelector(".cart-items-container");
let searchBar = document.querySelector(".search-form");

document.querySelector("#get-your-now-btn").onclick = () => {
    cartList.classList.toggle("active");
    navbar.classList.remove("active");
    searchBar.classList.remove("active");
}

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartList.classList.remove("active");
  searchBar.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  cartList.classList.toggle("active");
  navbar.classList.remove("active");
  searchBar.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchBar.classList.toggle("active");
  cartList.classList.remove("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  cartList.classList.remove("active");
  searchBar.classList.remove("active");
};