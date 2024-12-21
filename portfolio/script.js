// ハンバーガーメニューの開閉
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  if (navUl.style.display === "flex") {
    navUl.style.display = "none";
  } else {
    navUl.style.display = "flex";
  }
});