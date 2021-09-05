const clock = document.getElementById("clock");

function getClock() {
    const today = new Date();
    const chrismas = new Date(2021, 12, 25);
    const dday = chrismas.getTime() - today.getTime();

    const day = Math.ceil(dday / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((dday % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    // 60초를 구해야하므로 -> 1000 * 60
    // (dday까지 남은seconds % 6000) / 1000 으로 dday까지의 남은 초를 구함
    const seconds = String(Math.floor((dday % (1000 * 60)) / 1000)).padStart(2, "0");
    clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);

// interval : 주기적으로 특정한 일이 일어나게 하고싶을때 사용
// function getClock() {
    // const date = new Date();
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // padStart(2, "0")는 원래 크기인 String보다 길게 만들어야 할 때 사용 -> 전부 String타입임
    // String요소가 2글자라면 그대로 출력하고 2글자가 아니라면 0을 반환(대상 문자열의 좌측(시작)부터 적용)
    // padEnd()는 오른쪽부터 채워줌
    // getday는 0부터 시작하는 일요일 ~ 6까지 토요일을 반환
    // const day = String(date.getDate()).padStart(2, "0");
    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = `${day}d${hours}m ${minutes}h ${seconds}s`;
// }

// getClock();
// setInterval(getClock, 1000);

// 첫번째 인자는 실행하고자하는 function
// 두번째 인자는 호출되는 function 간격을 몇 ms(1000당 1초)로 할지 정함
// setInterval(sayHello, 5000);

// 사용자가 지정한 시간만큼 기다렸다가 출력
// setTimeout(sayHello, 5000);

// 금일의 날짜및 시간정보 가져옴
// new Date()

