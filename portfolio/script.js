// ハンバーガーメニューの開閉
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  // メニューが非表示なら表示、表示なら非表示に切り替える
  if (navUl.style.display === "flex") {
    navUl.style.display = "none";
  } else {
    navUl.style.display = "flex";
  }
});