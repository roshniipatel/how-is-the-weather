var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatherEl = document.getElementById('weather-things');
var currentTempEl = document.getElementById('current-temp');
var weatherForecastEl = document.getElementById('weather-forecast');
var searchBtn = document.getElementById('submitBtn');
var inputEl = document.getElementById('userInput')

var city
var lat
var lon
var weatherForecast = []

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var APIkey = '6304977c8ab162e4275bff1dfb9b99ec';
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;


// on button click get city name
function getCityName () {
  city = inputEl.value
  getGeolocation()
}

 // we need a function to get geo location
 // we need to make a fetch request that gets data and saves for later
  // using the geolocation we can make our second fetch in the next function
  function getGeolocation() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`)
      .then(res => res.json())
      .then(data => {
        lat = data[0].lat
        lon = data[0].lon
        getWeather()
      })
      .catch(err => console.error(err))
  }

 // we need a function to get weather based off of geolocation
 // using our geo make a fetch to get the current weather and save for later
function getWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`) 
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < 41; i+=8) {
        var forecast = {}
        forecast.temp = data.list[i].main.temp
        forecast.humidity = data.list[i].main.humidity
        weatherForecast.push(forecast)
      }
    renderWeather()
    })
}

var whatev = getElementById('weather-forecast')
 // render the weather to the screen
 // using the data from the api, write it to the screen
function renderWeather() {
  weatherForecast.forEach(forecast => {
    // create elements or display them
    var wrapperEl = document.createElement('div')
    var tempEl = document.createElement('p') // do it for wind, humidity, and icon
    tempEl.value = `Temp: ${forecast.temp}`
//    tempEl.setAttribute('class', "visible")
    wrapperEl.append(tempEl)
    whatev.append(wrapperEl)
})
}

 // event listener
 searchBtn.addEventListener('click', getCityName)