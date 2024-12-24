// ハンバーガーメニューの開閉
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  // 現在 flex なら非表示に、非表示なら flex に
  navUl.style.display = (navUl.style.display === "flex") ? "none" : "flex";
});