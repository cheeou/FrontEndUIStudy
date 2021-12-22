const orderForm = document.forms.order,
  userField = orderForm.elements.userInfo,
  productField = orderForm.elements.productInfo;

document.getElementById("btn1").addEventListener("click", (e) => {
  const { name, tel } = userField.elements;
  console.log(`${name.value} 사용자 ${tel.value}로 주문합니다.`);
});

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(productField.elements);
  const { productName, color } = productField.elements;
  console.log(`${productName.value} 상품 ${color.value}색을 주문합니다.`)
  
//   orderForm.method = 'GET';
//   orderForm.submit();
});


