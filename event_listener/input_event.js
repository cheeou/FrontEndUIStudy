const inputContainer = document.getElementById("input-container");
console.log(inputContainer);

//DOMContentLoaded 이벤트는 Dom이 생성되기 전에 자바스크립트가 실행되는 문제를 해결하기 위한 이벤트로 DOM생성 이후 작동한다.
document.addEventListener("DOMContentLoaded", (e) => {
  const inputContainer = document.getElementById("input-container");
  console.log(inputContainer);

  const inputEl = inputContainer.querySelector("input");
  inputEl.addEventListener("keydown", (e) => {
    console.log(`keyCode: ${e.keyCode}`);
  });

  const buttonEl = inputContainer.querySelector("button");
  buttonEl.addEventListener("click", (e) => {
    console.log(e.target);
    alert(`input value: ${inputEl.value}`);
  });
});
