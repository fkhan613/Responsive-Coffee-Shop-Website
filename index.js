const navbar = document.querySelector(".navbar");
const cartList = document.querySelector(".cart-items-container");
const searchBar = document.querySelector(".search-form");
const item1 = document.querySelector("#item-1");
const item2 = document.querySelector("#item-2");
const item3 = document.querySelector("#item-3");
const item4 = document.querySelector("#item-4");
const item5 = document.querySelector("#item-5");
const item6 = document.querySelector("#item-6");
const item7 = document.querySelector("#item-7");
const item8 = document.querySelector("#item-8");
const item9 = document.querySelector("#item-9");
const item10 = document.querySelector("#item-10");
const cancelBtn1 = document.querySelector(".item1cancel");
const cancelBtn2 = document.querySelector(".item2cancel");
const cancelBtn3 = document.querySelector(".item3cancel");
const cancelBtn4 = document.querySelector(".item4cancel");
const cancelBtn5 = document.querySelector(".item5cancel");
const cancelBtn6 = document.querySelector(".item6cancel");
const cancelBtn7 = document.querySelector(".item7cancel");
const cancelBtn8 = document.querySelector(".item8cancel");
const cancelBtn9 = document.querySelector(".item9cancel");
const cancelBtn10 = document.querySelector(".item10cancel");

cancelBtn1.onclick = () => {
  item1.classList.remove("active");
  document.querySelector(".item1btn").innerHTML = "Add to cart";
};

cancelBtn2.onclick = () => {
  item2.classList.remove("active");
  document.querySelector(".item2btn").innerHTML = "Add to cart";
};

cancelBtn3.onclick = () => {
  item3.classList.remove("active");
  document.querySelector(".item3btn").innerHTML = "Add to cart";
}

cancelBtn4.onclick = () => {
  item4.classList.remove("active");
  document.querySelector(".item4btn").innerHTML = "Add to cart";
}

cancelBtn5.onclick = () => {
  item5.classList.remove("active");
  document.querySelector(".item5btn").innerHTML = "Add to cart";
}

cancelBtn6.onclick = () => {
  item6.classList.remove("active");
  document.querySelector(".item6btn").innerHTML = "Add to cart";
}

cancelBtn7.onclick = () => {
  item7.classList.remove("active");
  document.querySelector(".item7btn").innerHTML = "Add to cart";
}

cancelBtn8.onclick = () => {
  item8.classList.remove("active");
  document.querySelector(".item8btn").innerHTML = "Add to cart";
}

cancelBtn9.onclick = () => {
  item9.classList.remove("active");
  document.querySelector(".item9btn").innerHTML = "Add to cart";
}

cancelBtn10.onclick = () => {
  item10.classList.remove("active");
  document.querySelector(".item10btn").innerHTML = "Add to cart";
}

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
