const weatherApi = {
  key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

let box = document.getElementById("input-box");
box.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    link(box.value);
    reset();
  }
})

let button = document.getElementById("submit_button");
button.addEventListener("click", function() {
  link(box.value);
  reset();
});


function reset() {
  let box = document.getElementById("input-box");
  box.value = "";
}

async function link(city) {
  try {
    let content = await fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`);
    let data = await content.json();
    let temp = data["main"]["temp"];
    let temp_feel = data["main"]["feels_like"];
    console.log(temp, temp_feel);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

let last_name = "Shin"
let name = `Ben ${last_name}`
// button.addEventListener("click", alert("lakjflasj"));
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=98d4e0ae686e42c873d2a0575825fe83
// https://api.openweathermap.org/data/2.5/weather?lat=51&lon=0&appid=9f23b56e8dcad8299bf4e5a2a3fc932b&units=metric