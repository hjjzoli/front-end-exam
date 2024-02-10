const hamburger = document.querySelector(".hamburger");

const navItems = document.querySelector(".nav-items");

const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");

  line1.classList.toggle("line-1-active");
  line2.classList.toggle("line-2-active");
  line3.classList.toggle("line-3-active");
});

var modal = document.getElementById("cartModal");

var btn = document.getElementById("cartBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
