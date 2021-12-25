//변수 저장 
const btnCall = document.querySelector("#btnCall"); 

//이벤트 연결 
btnCall.onclick = function(e){
    e.preventDefault(); 

    btnCall.classList.toggle("on"); 
}