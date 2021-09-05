const API_KEY = "4e617a5d595b6343318452d4264c3a06";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    // weather홈페이지에 명시되어있는 temp 가져오는 명령어 : url주소뒤에 &units=metric 붙이면 됨
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // fetch(??)로 url을 부름
    // 실제로 url의 홈페이지로 갈 필요 없이 JS가 url웹에 담긴 정보를 가져옴
    // 밑에 코드 동작원리 검색해보기
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        // date.weather의 첫번째요소를 가져오는데 .main(key)값에 담긴 value(Clouds)를 가져옴
        city.innerText = data.name;
        weather.innerText = `날씨: ${data.weather[0].main} 
        온도: ${data.main.temp}° 
        위치:`;
    //    const name = data.name;
    //    const weather = data.weather[0].main;
    }));
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// WIFI위치 OR GPS를 받아올 수 있음
// getCurrentPosition : 2개의 argument가 필요함
// 하나는 잘 실행되었을때 동작
// 다른 하나는 에러 발생시 동작
// 위치에 관한 여러 정보를 얻어올 수 있음
// latitude : 위도
// longitude : 경도
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// API란??