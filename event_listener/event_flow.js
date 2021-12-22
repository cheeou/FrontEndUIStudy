const el1 = document.getElementById("element1");
const el2 = document.getElementById("element2");
const el3 = document.getElementById("element3");
const el4 = document.getElementById("element4");

el1.addEventListener("click", (e) => console.log("요소1 클릭"));
el2.addEventListener("click", (e) => console.log("요소2 클릭")); // 2, 1 캡처링 클릭 타겟요소 부터 ~ 부모
el3.addEventListener("click", (e) => console.log("요소3 클릭"), true);
el4.addEventListener("click", (e) => console.log("요소4 클릭")); // 3, 4 캡처링 부모요소 부터 ~ 클릭 타겟
