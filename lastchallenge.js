const clock = document.getElementById("clock");
const login = document.getElementById("login");

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dates = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `TodayTime: ${year}년${month}월${dates}일${hours}시 ${minutes}분 ${seconds}초`;
}
getClock();
setInterval(getClock, 1000);

function getLogin(event) {
    event.preventDefault();
    console.log(event);
}

login.addEventListener("submit", getLogin);
