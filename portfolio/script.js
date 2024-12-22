/***********************************************
 * ハンバーガーメニューの開閉
 ***********************************************/
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  navUl.style.display = (navUl.style.display === "flex") ? "none" : "flex";
});

/***********************************************
 * ページ内リンクのスムーススクロール
 ***********************************************/
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      // スムーススクロール
      window.scrollTo({
        top: targetSection.offsetTop - 50, // ヘッダー分少し上
        behavior: "smooth"
      });
      // メニューを閉じる（スマホ時のみ）
      navUl.style.display = "none";
    }
  });
});

/***********************************************
 * IntersectionObserverを使ったフェードイン
 ***********************************************/
const fadeElems = document.querySelectorAll(".fade-up");
const fadeOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, 
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, fadeOptions);

fadeElems.forEach(elem => {
  fadeObserver.observe(elem);
});

/***********************************************
 * スキル円チャート: IntersectionObserverで
 * 画面内に入ったらアニメーション開始
 ***********************************************/
const circleElems = document.querySelectorAll(".circle-observe");

const circleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circleWrap = entry.target;
      const percentage = circleWrap.getAttribute("data-percentage");
      const circlePath = circleWrap.querySelector(".circle");
      // stroke-dasharrayをアニメーション
      circlePath.style.strokeDasharray = `${percentage}, 100`;
      // 一度アニメが完了したら再監視は不要
      observer.unobserve(circleWrap);
    }
  });
}, { threshold: 0.5 });

circleElems.forEach(circle => {
  circleObserver.observe(circle);
});