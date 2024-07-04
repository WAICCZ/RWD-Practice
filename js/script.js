function toggleMenu() {
  const ul = document.querySelector("header ul");
  if (ul.style.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
    const h = document.querySelector("header");
  }
}

// 定義一個媒體查詢
const mediaQuery = window.matchMedia("(max-width: 992px)");

// 定義一個事件處理函數
function handleResize(event) {
  const ul = document.querySelector("header ul");
  if (event.matches) {
    // 當視窗寬度小於等於 600px 時執行的代碼
    if (ul.style.display === "flex") {
      ul.style.display = "none";
    }
  } else {
    // 當視窗寬度大於 600px 時執行的代碼
    ul.style.display = "flex";
  }
}

// 初始檢查視窗大小
handleResize(mediaQuery);

// 當視窗大小改變時，觸發事件處理函數

mediaQuery.addListener(handleResize);
//header選取器
document.querySelectorAll("header li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    document.querySelector("header .active ").classList.remove("active");
    event.target.parentElement.classList.add("active");
  });
});
