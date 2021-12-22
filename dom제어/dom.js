const div1EL = document.getElementById("div1");
const input1 = document.getElementById("input1");

console.log(div1EL.hasAttribute("id"));
console.log(div1EL.getAttribute("id"));
console.log(div1EL.id);

div1EL.removeAttribute("id");
console.log(div1EL.id);

div1EL.setAttribute("id", "new-id");

console.log(input1.hasAttribute("id"));
const valueAttr = input1.getAttribute("value");
console.log(valueAttr);

const products = [
  { id: "p-01", name: "상품1" },
  { id: "p-02", name: "상품2" },
  { id: "p-03", name: "상품3" },
];

const productListEl = document.getElementById("product-list");
products
  .map((product) => {
    const newEl = document.createElement("li");
    newEl.id = product.id;
    newEl.innerHTML = product.name;
    return newEl;
  })
  .forEach((productEl) => {
    productListEl.appendChild(productEl);
  });

setTimeout(() => {
  const secondEl = document.querySelector("ul li:nth-child(2)");
  secondEl.remove();
}, 1000);

productListEl.after("<div>잘못된 사용</div>"); //after를 이용하여 product-list 요소 다음으로 노드를 추가한다.
productListEl.insertAdjacentHTML("afterend", "<p>추가된 문단</p>"); //insertAdjacentHTML은 주어진 HTML 텍스트를 파싱하여 만들어진 노드 객체를 주어진 위치로 추가한다. afterend는 요소 다음으로 추가한다.
