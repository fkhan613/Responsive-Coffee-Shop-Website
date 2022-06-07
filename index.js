let navbar = document.querySelector(".navbar");
let cartList = document.querySelector(".cart-items-container");
let searchBar = document.querySelector(".search-form");
let item1 = document.querySelector("#item-1");
let item2 = document.querySelector("#item-2");
let item3 = document.querySelector("#item-3");
let item4 = document.querySelector("#item-4");
let item5 = document.querySelector("#item-5");
let item6 = document.querySelector("#item-6");
let item7 = document.querySelector("#item-7");
let item8 = document.querySelector("#item-8");
let item9 = document.querySelector("#item-9");
let item10 = document.querySelector("#item-10");

document.querySelector("#item-1-btn").onclick = () => {
  item1.classList.toggle("active");
}

document.querySelector("#item-2-btn").onclick = () => {
  item2.classList.toggle("active");
};

document.querySelector("#item-3-btn").onclick = () => {
  item3.classList.toggle("active");
};

document.querySelector("#item-4-btn").onclick = () => {
  item4.classList.toggle("active");
};

document.querySelector("#item-5-btn").onclick = () => {
  item5.classList.toggle("active");
};

document.querySelector("#item-6-btn").onclick = () => {
  item6.classList.toggle("active");
};

document.querySelector("#item-7-btn").onclick = () => {
  item7.classList.toggle("active");
};

document.querySelector("#item-8-btn").onclick = () => {
  item8.classList.toggle("active");
};

document.querySelector("#item-8-btn").onclick = () => {
  item8.classList.toggle("active");
};

document.querySelector("#item-9-btn").onclick = () => {
  item9.classList.toggle("active");
};

document.querySelector("#item-10-btn").onclick = () => {
  item10.classList.toggle("active");
};

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