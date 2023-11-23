const weatherApi = {
  key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

let box = document.getElementById("input-box");
box.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    // changeHTML(box.value);
    alert("alert!");
    reset();
  }
})

let button = document.getElementById("submit_button");
button.addEventListener("click", function() {
  // changeHTML(box.value);
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
    let weatherMain = data["weather"][0]["main"];

    let unixTime = data["dt"];
    let timeZone = data["timezone"];

    let realTime = unixTime + timeZone;

    let today = new Date((realTime * 1000));

    console.log(today);

    let temp_feel = data["main"]["feels_like"];
    console.log(JSON.stringify(data, null, 2));
    console.log(temp, temp_feel);
    console.log(weatherMain, unixTime);

    let text = `Current temp in ${city} is ${temp}`;
    changeHTML(text)
  } catch (e) {
    console.error(e);
  }
}

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



// link("Seattle");
// button.addEventListener("click", alert("lakjflasj"));
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=98d4e0ae686e42c873d2a0575825fe83
// https://api.openweathermap.org/data/2.5/weather?lat=51&lon=0&appid=9f23b56e8dcad8299bf4e5a2a3fc932b&units=metric