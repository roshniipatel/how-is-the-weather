var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatherEl = document.getElementById('weather-things');
var currentTempEl = document.getElementById('current-temp');
var weatherForecastEl = document.getElementById('weather-forecast');
var searchBtn = document.getElementById('submitBtn');

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var APIkey = '6304977c8ab162e4275bff1dfb9b99ec';
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
var historyArr = [];

// shows current time
function displayTime() {
  var rightNow = dayjs().format('hh:mm a');
  timeDisplayEl.textContent = rightNow;
};
displayTime();
setInterval(displayTime, 1000);

// shows current date
function displayDate() {
  var dateNOW = dayjs().format('dddd, MMMM D[,] YYYY');
  dateDisplayEl.textContent = dateNOW;
};
displayDate();
setInterval(displayDate, 24 * 60 * 60 * 1000);

// ToDo: get array for cities



