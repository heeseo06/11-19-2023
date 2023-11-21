const weatherApi = {
  key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}


let button = document.getElementById("submit_button");
button.addEventListener("click", function() {
  alert("alert!");
});

// button.addEventListener("click", alert("lakjflasj"));
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=98d4e0ae686e42c873d2a0575825fe83
// https://api.openweathermap.org/data/2.5/weather?lat=51&lon=0&appid=9f23b56e8dcad8299bf4e5a2a3fc932b&units=metric