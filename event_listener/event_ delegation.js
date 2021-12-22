document.querySelector("ul#todo-list").addEventListener("click", (e) => {
  if (e.target.className.indexOf("remove-btn") < 0) {
    return;
  }

  const li = e.target.closest("li"); //부모 요소 단위로 선택자 조건에 가장 가까운 Element 객체를 반환하면 없다면 null
  console.log(`${li.innerText} 삭제`);
  li.remove();
});
