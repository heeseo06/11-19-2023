// function reset() {
//   let input = document.getElementById('input-box');
//   input.value = "";
// }

// function getWeatherReport(city) {
//   fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)  // fetch method fetching the data from  base url ...metric is used for unit in celcius......here i am appending the base url to get data by city name .
//       .then(weather => {   //weather is from api
//           return weather.json(); // return data from api in JSON
//       }).then(showWeaterReport);  // calling showweatherreport function

// }


// let searchInputBox = document.getElementById('input-box');
// searchInputBox.addEventListener('keypress', (event) => {
//     if (event.keyCode == 13) {
//         // console.log(searchInputBox.value);
//         getWeatherReport(searchInputBox.value);

//     }
// })

// document.getElementById("input-button").addEventListener('click', function() {
//     getWeatherReport(searchInputBox.value);
// });










// function getTime(key) {
//     let d = new Date();

//     if (key.toLowerCase() === "h") {
//       console.log(d.getHours());
//     } else if (key.toLowerCase() === "m") {
//       console.log(d.getMinutes());
//     } else if (key.toLowerCase() === "s") {
//       console.log(d.getSeconds());
//     } else {
//       console.log("Error");
//     }
//   }

// integer 1,2,3 3.0 1.234567
// "slkjfj" string
// 1.3 4.5 3.333 = float
// //   getTime("h");
//   getTime("s");
//   getTime("m");
//   getTime("can");
//   getTime(34);



  const weatherApi = {
    key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
  }

  async function getWeatherReport(city) {
    try{
      let content = await fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
      let data = await content.json()
      console.log(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
    }

    try {
        console.log("here");
    } catch (err) {
        console.error("Error");
    }
  }


  getWeatherReport("London");







//   async function Fetch() {
//     // Simulating an asynchronous operation (e.g., fetching data from an API)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const data = "Async data is here!";
//         resolve(data);
//       }, 2000); // Simulating a 2-second delay
//     });
//   }

//   async function processData() {
//     try {
//       const = Fetch();
//       const awaitResult = await Fetch(); // Wait for the asynchronous operation to complete
//       console.log("Async data:", awaitResult);
//       console.log("Async data:", result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   // Call the asynchronous function
//   processData();