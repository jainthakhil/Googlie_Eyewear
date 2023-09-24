// for wishlist button
const wish = document.querySelectorAll("#heart");
wish.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("fa-solid")) {
      item.classList.remove("fa-solid");
      item.style.color = "#adadad";
    } else {
      item.classList.add("fa-solid");
      item.style.color = "red";
    }
  });
});

// for add to cart button
const cartBtn = document.querySelectorAll("#cart-btn");
cartBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.innerHTML = "Added to cart";
    item.style.backgroundColor = "#ededed";
    item.style.color = "#5a060b";
    item.disabled = true;
    setTimeout(function () {
      item.disabled = false;
      item.innerHTML = "Add to Cart";
      item.style.backgroundColor = "#5a060b";
      item.style.color = "#ededed";
    }, 2000);
  });
});

// for search bar auto hide
function visibleSearch() {
  document.getElementById("search").style.display = "none";
  document.getElementById("hidden-form").style.display = "flex";
}
setTimeout(function () {
  document.getElementById("hidden-form").style.display = "none";
  document.getElementById("search").style.display = "";
}, 20000);

// for adding to cart number increase
var i = 0;
const cartItemNo = document.getElementById("cart-no");
cartBtn.forEach((item) => {
  item.addEventListener("click", function () {
    i++;
    console.log(i);
    cartItemNo.innerHTML = i;
  });
});

// for subscribe button
const subBtn = document.getElementById("subscribe-btn");
subBtn.addEventListener("click", function (event) {
  event.preventDefault();
  subBtn.innerHTML = "Subscribed";
  setTimeout(() => {
    subBtn.innerHTML = "Subscribe";
  }, 2000);
});
