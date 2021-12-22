const normalEl = document.querySelector("p");
const eventPreventEl = document.getElementById("prevent");
normalEl.addEventListener("contextmenu", () => {
  console.log("contextmenu호출, 마우스 우클릭 이벤트");
});

eventPreventEl.addEventListener("contextmenu", (e) => {
    console.log('이벤트 막은 글 클릭')
    e.stopPropagation();
    e.preventDefault();
});
