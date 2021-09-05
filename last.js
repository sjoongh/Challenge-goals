const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"

// toDos는 전역변수로 배열이 선언되어 있어야함
// 그래야 push로 값들이 담김
let toDos = []

function saveToDos() {
    // .setItem(이름 설정, 입력값)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // li 태그 삭제
    li.remove();
    // delete이벤트가 발생한 id와 다른 id 값만 저장
    // .filter는 조건에 해당하는 모든 요소가 있는 배열을 새로 생성하는 기능
    // li.id(number)와 toDo.id(String) 는 다른 타입이므로 변환해주어야 조건에 맞음
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // 위의 조건에 해당하는 남은 id들을 saveToDOS()로 localStorage에 저장함
    saveToDos();
}

function paintToDo(newTodo) {
    // li태그 생성
    const li = document.createElement("li");
    // li에 id를 만드는데 그 id는 newTodo의 id값
    li.id = newTodo.id;
    const span = document.createElement("span");
    // text값만 전달해주기 위해 newTodo.text를 사용함
    // newTodo.id는 id값을 전달해줌
    span.innerText = newTodo.text;
    
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // 객체 생성해 object 저장
    const newTodoObj = {
        text:newTodo,
        // 현재 날짜&시간을 나타냄
        id: Date.now()
    }
    // Text대신 object를 push해야함
    toDos.push(newTodoObj);
    // paintToDo에도 text만 주는대신 object를 줌
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 키(name) 값을 통해 localStorage에서 가져옴 value를(String인 상태)
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    // parsedToDos로 savedToDos에서 가져온 값을 객체로 변환해줌
    const parsedToDos = JSON.parse(savedToDos);
    // 여기서 기존의 값들을 채워줌
    // 하지만 toDos와 localStorage는 다른 data이기 때문에 
    // 웹에서 localStorage를 삭제해도 toDos에는 남아있기때문에 그것을 조정해줘야함
    // 해결방법 : value를 나타내는 id값을 줘서 해당 id를 호출했을때 text를 삭제함
    toDos = parsedToDos
    // 새로 입력하는 값들을 toDos는 기존값이 들어가있는 상태이므로
    // 기존값 출력 후 새로 입력하는값들이 출력됨
    parsedToDos.forEach(paintToDo);
}


// 1번째 정리-------------------------------------------
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "toDos"

// toDos는 시작시 언제나 빈 배열인 상태이므로
// 기존 값에 추가하는 작업을 할 시 기존값은 삭제되고 추가되는 값들만 존재하게됨
// 해결방법 : 고정된 변수값만 넣을 수 있는 const에서 let으로 변경
// 한 후 기존의 값을 toDos에 forEach 전에 삽입해줌
// let toDos = [];
// const toDos = [];

// function saveToDos() {
//     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//     // event.target -> 어떠한 이벤트가 발생했을때 어디서 발생했는지 찾아줌
//     // ex : button click이벤트 발생시 button태그를 찾아줌
//     // parentElement : 부모 요소에 접근해 엘리먼트를 리턴
//     // parentNode : 노드타입의 반환
//     // 둘다 같은 기능이지만 parentelement는 태그밖을 떠나지 못함
//     // parentNode는 태그밖의 요소도 가져옴 null or ...? 같은
//     const li = event.target.parentElement;
//     li.remove();
// }
// // localStorage에는 오직 문자열만 저장 가능
// // JSON.stringify([1, 2, 3, 4]) -> JSON객체(어떠한 것이든)를 String객체로, 데이터를 서버로전송할떄 사용
// // JSON.parse("[1, 2, 3, 4]") -> String객체(ex : localhost에 있는것도 가능)를 JSON객체(배열)로, 데이터를 객체.필드 형태로 사용하고싶을때, JS에서 사용할때

// function paintToDo(newTodo) {
//     // <li>만듬
//     const li = document.createElement("li");
//     // <span> 만듬
//     const span = document.createElement("span");
//     // newTodo의 입력값을 span에 넣음
//     span.innerText = newTodo;
//     const button = document.createElement("button");
//     button.innerText = "X";
//     button.addEventListener("click", deleteToDo);
//     // li태그 안에 .appendChild(span)로 span태그생성
//     li.appendChild(span);
//     li.appendChild(button);
//     // toDoList의 자식 태그로 위에서 만든 li태그 붙여줌
//     toDoList.appendChild(li);
//     // li태그안에 있는 모든 글자 출력
//     // console.log(li);
    
// }

// // form은 기본적으로 submit을 가지고 있고 data 전송해줌 
// function handleToDoSubmit(event) {
//     event.preventDefault();
//     // value값 저장
//     const newTodo = toDoInput.value;
//     // 입력창 비우는 코드
//     toDoInput.value = "";
//     toDos.push(newTodo);
//     paintToDo(newTodo);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 일반함수 호출
// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

// const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
// // if(savedToDos) 이랑 같은 표현
// if (savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos);
//     // forEach : array에 있는 각각의 item를 
//     // 에 넣어서 sayHello(item)을 요소마다 실행할 수 있게 함
//     // 배열의 요소가 4개일 경우 함수가 4번 호출 되는 것이 아니라
//     // 각각의 요소가 따로 함수를 한번씩 호출하는 것임
//     // 함수를 만들어서 호출해도 되지만 forEach안에 직접 함수를 작성해도됨 ex : 화살표
//     // parsedToDos.forEach(sayHello);

//     // 화살표함수로 실행, 코드가 짧아지고 함수명이 굳이 필요가 없으므로
//     // why?? 함수는 그저 배열의 요소만 빼내는 용도이므로 필요한건 요소임
//     // 때문에 익명함수 화살표로 작성해 요소만 빼내는 것도 코드를 줄일 수 있는 방법임
//     // 화살표 or 익명 함수를 사용해도 괜찮지만 paintToDo(newToDo)는 newToDo의 입력값이 직접 들어오는 함수이므로
//     // parsedToDos.forEach(paintToDo); 이런식으로 paintToDo에 들어온 요소들을 바로 돌려도 됨
//     // 동작은 parsedToDos는 JSON.parse되어 있으므로 객체를 출력함 즉 paintToDo로 들어오는 요소를 객체로 변경 후 .forEach로 순서대로 순환

//     parsedToDos.forEach((item) => console.log("this is the turn of ", item));
// }
