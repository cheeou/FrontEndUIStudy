const buildAlert = (title, message) => {
  const alert = document.createElement("div");
  const id = Math.ceil(Math.random() * 1000); //유일한 숫자의 id를 만든다.

  alert.className = "alert";
  alert.innerHTML = `
    <span class="close">&times;</span>
    <h3>${title}</h3>
    <p>${message}</p>
  `; //&times;는 닫기 버튼을 만드는 특수 문자이다.

  alert.id = id; //임의의 아이디 부여
  alert.querySelector("span.close").addEventListener("click", (e) => {
    const closeEvt = new CustomEvent("close", {
      bubbles: true,
      detail: { id, message },
    }); //매개변수로 이벤트명과 옵션객체를 받는다.

    alert.dispatchEvent(closeEvt); //정의한 이벤트를 전달한다.
    alert.remove();
  });

  document.getElementById('order-container').prepend(alert); //prepend 앞, append 뒤

  return alert;
};

document.getElementById("order-btn").addEventListener("click", (e) => {
  const alertEl = buildAlert("에러", "로그인을 해주세요");
  alertEl.addEventListener("close", (e) => {
    console.log(e.detail);
    console.log("error 창을 닫았습니다.");
  });
});
