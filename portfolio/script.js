/***********************************************
 * ハンバーガーメニューの開閉
 ***********************************************/
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", () => {
  navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
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
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
      navUl.style.display = "none"; // スマホメニューを閉じる
    }
  });
});

/***********************************************
 * IntersectionObserverでフェードイン
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
 * ドーナツグラフのアニメーション
 * 画面に入ったら stroke-dasharray を設定
 ***********************************************/
const donutSegments = document.querySelectorAll(".donut-segment");

/*
  スキル割合:
    - HTML/CSS: 25%
    - C#: 10%
    - Python: 40%
    - Java: 25%
  それぞれ stroke-dasharray="0,100" から [25,100], [10,100], [40,100], [25,100] にアニメさせる
*/

const donutObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面内に入ったらスキル割合を適用
      // donut-segment の class 名からどの割合か判断して stroke-dasharray を変える
      if (entry.target.classList.contains("donut-html")) {
        entry.target.setAttribute("stroke-dasharray", "25 100");
      } else if (entry.target.classList.contains("donut-csharp")) {
        entry.target.setAttribute("stroke-dasharray", "10 100");
      } else if (entry.target.classList.contains("donut-python")) {
        entry.target.setAttribute("stroke-dasharray", "40 100");
      } else if (entry.target.classList.contains("donut-java")) {
        entry.target.setAttribute("stroke-dasharray", "25 100");
      }
      // 一度アニメ完了したら監視を外す
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

donutSegments.forEach(segment => {
  donutObserver.observe(segment);
});