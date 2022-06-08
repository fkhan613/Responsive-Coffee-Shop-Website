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
  if (item1.classList.contains("active")) {
    document.querySelector(".item1btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item1btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-2-btn").onclick = () => {
  item2.classList.toggle("active");
  if (item2.classList.contains("active")) {
    document.querySelector(".item2btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item2btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-3-btn").onclick = () => {
  item3.classList.toggle("active");
  if (item3.classList.contains("active")) {
    document.querySelector(".item3btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item3btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-4-btn").onclick = () => {
  item4.classList.toggle("active");
  if (item4.classList.contains("active")) {
    document.querySelector(".item4btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item4btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-5-btn").onclick = () => {
  item5.classList.toggle("active");
  if (item5.classList.contains("active")) {
    document.querySelector(".item5btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item5btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-6-btn").onclick = () => {
  item6.classList.toggle("active");
  if (item6.classList.contains("active")) {
    document.querySelector(".item6btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item6btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-7-btn").onclick = () => {
  item7.classList.toggle("active");
  if (item7.classList.contains("active")) {
    document.querySelector(".item7btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item7btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-8-btn").onclick = () => {
  item8.classList.toggle("active");
  if (item8.classList.contains("active")) {
    document.querySelector(".item8btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item8btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-9-btn").onclick = () => {
  item9.classList.toggle("active");
  if (item9.classList.contains("active")) {
    document.querySelector(".item9btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item9btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

document.querySelector("#item-10-btn").onclick = () => {
  item10.classList.toggle("active");
  if (item10.classList.contains("active")) {
    document.querySelector(".item10btn").innerHTML = "Remove from cart";
  } else {
    document.querySelector(".item10btn").innerHTML = "Add to cart";
  }
  checkIfListActive();
};

function checkIfListActive() {
  if (!cartList.classList.contains("active")) {
    cartList.classList.toggle("active");
  }
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
