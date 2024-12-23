/**********************************************
 * ハンバーガーメニューの開閉
 **********************************************/
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  navUl.style.display = (navUl.style.display === "flex") ? "none" : "flex";
});

/**********************************************
 * ページ内リンクのスムーススクロール
 **********************************************/
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
      navUl.style.display = "none"; 
    }
  });
});

/**********************************************
 * フェードアップ (Intersection Observer)
 **********************************************/
const fadeElems = document.querySelectorAll(".fade-up");
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(elem => fadeObserver.observe(elem));

/**********************************************
 * スタック型バーグラフのアニメ (Intersection Observer)
 **********************************************/
const stackedBar = document.getElementById("stackedBar");
const barSegments = stackedBar.querySelectorAll(".bar-segment");

const barObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 各セグメントに data-width を設定しておき、
      // width: 0% → n% にCSSアニメーション
      barSegments.forEach(seg => {
        const targetWidth = seg.getAttribute("data-width");
        seg.style.width = targetWidth + "%";
      });
      // 一度表示したら再監視は不要
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

barObserver.observe(stackedBar);