const weatherApi = {
  key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

let box = document.getElementById("input-box");
box.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    changeHTML(box.value);
    link(box.value);
    reset();
  }
})

let button = document.getElementById("submit_button");
button.addEventListener("click", function() {
  changeHTML(box.value);
  link(box.value);
  reset();
});


function reset() {
  let box = document.getElementById("input-box");
  box.value = "";
}

async function link(city) {

  let content;
  let data;
  try {
    content = await fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`);
    data = await content.json();

  } catch (e) {
    console.error(e);
  }

    let temp = data["main"]["temp"];
    let weatherMain = data["weather"][0]["main"];

    let description = data["weather"][0]["description"];

    let unixTime = data["dt"];
    let timeZone = data["timezone"];

    let realTime = unixTime + timeZone;

    let today = new Date((realTime * 1000));

    let temp_feel = data["main"]["feels_like"];


    let text = `Temperature in ${city}: ${temp}°C
    <br> Weather: ${description}`;

    changeHTML(text)
    changeBG(weatherMain);
}

function changeBG(currnetWeather) {
  if (currnetWeather === 'Clear') {

    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Clouds') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Rain') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Snow') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Sunny') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Thunderstorm') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Drizzle') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  } else if (currentWeather === 'Mist') {
    document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  }
  else {
    document.body.style.backgroundImage = 'url(img/rain.webp)';
  }
};


function changeHTML(text) {
  let op = document.getElementById("info");
  op.style.display = "block";
  let parent = document.getElementById("header");
  op.innerHTML =
  `
  <div>
    <p id="apple">${text}</p>
  </div>
  `;

  parent.append(op);
}


// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=98d4e0ae686e42c873d2a0575825fe83
// https://api.openweathermap.org/data/2.5/weather?lat=51&lon=0&appid=9f23b56e8dcad8299bf4e5a2a3fc932b&units=metric