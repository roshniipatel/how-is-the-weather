var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatherEl = document.getElementById('weather-things');
var weatherForecastEl = document.getElementById('weather-forecast');
var searchBtn = document.getElementById('submitBtn');
var inputEl = document.getElementById('userInput');
var searchHistoryEl = document.getElementById('search-history-container');
var searchList = document.getElementById('search-list');


var APIkey = '6304977c8ab162e4275bff1dfb9b99ec';
var city 
var weatherForecast = [];
var historyArr = []
var dateNow = dayjs();


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
  var currentDate = dateNow.format('dddd, MMMM D[,] YYYY');
  dateEl.textContent = currentDate;
};
displayDate();
setInterval(displayDate, 24 * 60 * 60 * 1000);


// on button click get city name
function getCityName() {
  city = inputEl.value
  saveCity()
  getGeolocation();
};


// once a user searches for a city, we want to save the city to local storage, and display it under the search bar

function saveCity() {
  var pastCities = localStorage.getItem('savedCities')

  if (pastCities) {
    historyArr = JSON.parse(pastCities)
  }

  if (historyArr.indexOf(city) !== -1) {
    return
  }

  historyArr.push(city)
  console.log(historyArr);
  
  localStorage.setItem('savedCities', JSON.stringify(historyArr))
}

function renderCities() {
  var prevCities = localStorage.getItem('savedCities')
  var listEl = document.getElementById('search-list')

  listEl.innerHTML = '';
  
  if (prevCities) {
    // turn it into an array
    prevCities = JSON.parse(prevCities)
    // for each city
    prevCities.forEach(prevCity => {
      searchList.innerHTML = '';
      searchList.style.display = 'flex'; 
      searchList.style.flexDirection = 'column';

      for (var i = 0; i < historyArr.length; i++) {
        var searchHistory = historyArr[i];
        var button = document.createElement('button');
        button.textContent = searchHistory;
        button.style.fontSize = '30px';
        button.style.backgroundColor = 'rgba(10, 10, 10, 0.2)';
        searchList.appendChild(button);
        button.addEventListener('click', function () {
          console.log('clicked');
          console.log(this.textContent); 
          city = this.textContent; 
          getGeolocation();
        })
      };
    });
  };
};

// event listener for search button
searchBtn.addEventListener('click', getCityName);


// we need a function to get geo location
// we need to make a fetch request that gets data and saves for later
// using the geolocation we can make our second fetch in the next function
function getGeolocation() {
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

      // get date, format and write to html
      var tomorrow = dateNow.add(1, 'day');
      var formatTomorrow = tomorrow.format('dddd');
      var tomorrowEl = document.getElementById('day-1')
      tomorrowEl.textContent = formatTomorrow

      var currentTempEl = document.querySelector('#temp-1');
      var currentWindEl = document.querySelector('#wind-1');
      var currentHumidityEl = document.querySelector('#humidity-1');
      var currentIconEl = document.querySelector('#icon-1');

      currentTempEl.textContent = 'Temp: ' + data.list[8].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[8].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[8].main.humidity + '%';

      // jessica's code helped to figure out how to show all the icons
      currentIconEl.textContent = "";
      var iconOne = data.list[8].weather[0].icon;
      var iconOneImg = document.createElement('img');
      iconOneImg.src = "http://openweathermap.org/img/wn/" + iconOne + "@2x.png";
      currentIconEl.appendChild(iconOneImg);



      // day 2 data
      var tomorrow = dateNow.add(2, 'day');
      var formatTomorrow = tomorrow.format('dddd');
      var tomorrowEl = document.getElementById('day-2')
      tomorrowEl.textContent = formatTomorrow

      var currentTempEl = document.querySelector('#temp-2');
      var currentWindEl = document.querySelector('#wind-2');
      var currentHumidityEl = document.querySelector('#humidity-2');
      var currentIconEl = document.querySelector('#icon-2');

      currentTempEl.textContent = 'Temp: ' + data.list[16].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[16].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[16].main.humidity + '%';

      currentIconEl.textContent = "";
      var iconTwo = data.list[16].weather[0].icon;
      var iconTwoImg = document.createElement('img');
      iconTwoImg.src = "http://openweathermap.org/img/wn/" + iconTwo + "@2x.png";
      currentIconEl.appendChild(iconTwoImg);



      // day 3 data
      var tomorrow = dateNow.add(3, 'day');
      var formatTomorrow = tomorrow.format('dddd');
      var tomorrowEl = document.getElementById('day-3')
      tomorrowEl.textContent = formatTomorrow

      var currentTempEl = document.querySelector('#temp-3');
      var currentWindEl = document.querySelector('#wind-3');
      var currentHumidityEl = document.querySelector('#humidity-3');
      var currentIconEl = document.querySelector('#icon-3');

      currentTempEl.textContent = 'Temp: ' + data.list[24].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[24].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[24].main.humidity + '%';

      currentIconEl.textContent = "";
      var iconThree = data.list[24].weather[0].icon;
      var iconThreeImg = document.createElement('img');
      iconThreeImg.src = "http://openweathermap.org/img/wn/" + iconThree + "@2x.png";
      currentIconEl.appendChild(iconThreeImg);



      // day 4 data
      var tomorrow = dateNow.add(4, 'day');
      var formatTomorrow = tomorrow.format('dddd');
      var tomorrowEl = document.getElementById('day-4')
      tomorrowEl.textContent = formatTomorrow

      var currentTempEl = document.querySelector('#temp-4');
      var currentWindEl = document.querySelector('#wind-4');
      var currentHumidityEl = document.querySelector('#humidity-4');
      var currentIconEl = document.querySelector('#icon-4');

      currentTempEl.textContent = 'Temp: ' + data.list[32].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[32].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[32].main.humidity + '%';

      currentIconEl.textContent = "";
      var iconFour = data.list[32].weather[0].icon;
      var iconFourImg = document.createElement('img');
      iconFourImg.src = "http://openweathermap.org/img/wn/" + iconFour + "@2x.png";
      currentIconEl.appendChild(iconFourImg);



      // day 5 data
      var tomorrow = dateNow.add(5, 'day');
      var formatTomorrow = tomorrow.format('dddd');
      var tomorrowEl = document.getElementById('day-5')
      tomorrowEl.textContent = formatTomorrow

      var currentTempEl = document.querySelector('#temp-5');
      var currentWindEl = document.querySelector('#wind-5');
      var currentHumidityEl = document.querySelector('#humidity-5');
      var currentIconEl = document.querySelector('#icon-5');

      currentTempEl.textContent = 'Temp: ' + data.list[39].main.temp + '°F';
      currentWindEl.textContent = 'Wind: ' + data.list[39].wind.speed + 'mph';
      currentHumidityEl.textContent = 'Humidity: ' + data.list[39].main.humidity + '%';

      currentIconEl.textContent = "";
      var iconFive = data.list[39].weather[0].icon;
      var iconFiveImg = document.createElement('img');
      iconFiveImg.src = "http://openweathermap.org/img/wn/" + iconFive + "@2x.png";
      currentIconEl.appendChild(iconFiveImg);
      renderCities()
    });
};


