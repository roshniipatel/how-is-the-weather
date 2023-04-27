var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatherEl = document.getElementById('weather-things');
// var currentTempEl = document.getElementById('current-temp');
var weatherForecastEl = document.getElementById('weather-forecast');
var searchBtn = document.getElementById('submitBtn');
var inputEl = document.getElementById('userInput');
var searchHistoryEl = document.getElementById('search-history-container');
var searchList = document.getElementById('search-list');


var APIkey = '6304977c8ab162e4275bff1dfb9b99ec';
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;
var city = document.getElementById('submitBtn').value;
var lat;
var lon;
var weatherForecast = [];
var latlonURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`;
var historyArr = []



// function to show current time
function displayTime() {
  var timeNow = dayjs();
  var currentTime = timeNow.format('hh:mm a');
  timeEl.textContent = currentTime;
};
displayTime();
setInterval(displayTime, 1000);

// function to show current date
function displayDate() {
  var dateNow = dayjs()
  var currentDate = dateNow.format('dddd, MMMM D[,] YYYY');
  dateEl.textContent = currentDate;
};
displayDate();
setInterval(displayDate, 24 * 60 * 60 * 1000);



// on button click get city name
function getCityName() {
  city = inputEl.value
  getGeolocation();
};


// event listener
searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var searchText = userInput.value;
  if (searchText === "") {
    return;
  }

  historyArr.push(searchText);
  userInput.value = '';

  // storeSearchHistory();
  // renderHistory();
  getGeolocation(searchText);

});


// we need a function to get geo location
// we need to make a fetch request that gets data and saves for later
// using the geolocation we can make our second fetch in the next function
function getGeolocation(city) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`)
    .then(res => res.json())
    .then(data => {
      lat = data[0].lat
      lon = data[0].lon
      getWeather(lat, lon);
    })
    .catch(err => console.error(err))
};

// we need a function to get weather based off of geolocation
// using our geo make a fetch to get the current weather and save for later
function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`)
    .then(res => res.json())
    .then(data => {
      // current day data
      var currentTempEl = document.querySelector('#current-temp');
      var currentWindEl = document.querySelector('#current-wind');
      var currentHumidityEl = document.querySelector('#current-humidity');
      var location = document.getElementById('location');

      currentTempEl.textContent = data.list[0].main.temp + '°F';
      currentWindEl.textContent = data.list[0].wind.speed + 'mph';
      currentHumidityEl.textContent = data.list[0].main.humidity + '%';
      location.innerHTML = data.city.name;



      // day 1 data
      var currentTempEl = document.querySelector('#temp-1');
      var currentWindEl = document.querySelector('#wind-1');
      var currentHumidityEl = document.querySelector('#humidity-1');
      var currentIconEl = document.querySelector('#icon-1');

      currentTempEl.textContent = 'Temp: ' + data.list[8].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[8].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[8].main.humidity + '%';
      currentIconEl.textContent = data.list[8].weather[0].icon;



      // day 2 data
      var currentTempEl = document.querySelector('#temp-2');
      var currentWindEl = document.querySelector('#wind-2');
      var currentHumidityEl = document.querySelector('#humidity-2');
      var currentIconEl = document.querySelector('#icon-2');

      currentTempEl.textContent = 'Temp: ' + data.list[16].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[16].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[16].main.humidity + '%';
      currentIconEl.textContent = data.list[16].weather[0].icon;



      // day 3 data
      var currentTempEl = document.querySelector('#temp-3');
      var currentWindEl = document.querySelector('#wind-3');
      var currentHumidityEl = document.querySelector('#humidity-3');
      var currentIconEl = document.querySelector('#icon-3');

      currentTempEl.textContent = 'Temp: ' + data.list[24].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[24].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[24].main.humidity + '%';
      currentIconEl.textContent = data.list[24].weather[0].icon;



      // day 4 data
      var currentTempEl = document.querySelector('#temp-4');
      var currentWindEl = document.querySelector('#wind-4');
      var currentHumidityEl = document.querySelector('#humidity-4');
      var currentIconEl = document.querySelector('#icon-4');

      currentTempEl.textContent = 'Temp: ' + data.list[32].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[32].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[32].main.humidity + '%';
      currentIconEl.textContent = data.list[32].weather[0].icon;



      // day 5 data
      var currentTempEl = document.querySelector('#temp-5');
      var currentWindEl = document.querySelector('#wind-5');
      var currentHumidityEl = document.querySelector('#humidity-5');
      var currentIconEl = document.querySelector('#icon-5');

      currentTempEl.textContent = 'Temp: ' + data.list[39].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[39].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[39].main.humidity + '%';
      currentIconEl.textContent = data.list[39].weather[0].icon;
    });
};




// currentTempEl.textContent = data.list[i].main.temp + '°F';
      // currentHumidityEl.textContent = data.list[i].main.humidity + '%';
      // currentWindEl.textContent = data.list[i].wind.speed + 'mph';
      // location.textContent = data.city.name + ',  ' + data.city.country;


   // }
      // }

      // for (let i = 0; i < 41; i += 8) {
      //   var forecast = {}
      //   forecast.innerHTML = data.list[0].main.temp + '°F';
      //   forecast.innerHTML = data.list[0].main.humidity + '%';
      //   forecast.innerHTML = data.list[0].weather[0].icon;
      //   forecast.innerHTML = data.list[0].wind.speed + 'mph';
      //   weatherForecast.push(forecast)

      //   forecast.temp = data.list[0].main.temp + '°F';
      //   forecast.humidity = data.list[0].main.humidity + '%';
      //   forecast.icon = data.list[0].weather[0].icon;
      //   forecast.wind = data.list[0].wind.speed + 'mph';
      //   weatherForecast.push(forecast)
      // }
      // renderWeather();
      // // console.log(data)