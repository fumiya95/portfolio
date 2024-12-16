// ハンバーガーメニューの開閉
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
});