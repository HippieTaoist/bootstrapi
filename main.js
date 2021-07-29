const DOGAPIURL = "https://dog.ceo/api/breeds/image/random";
let randoDogoUrl = document.getElementById('rand-dog-img')
let dogGenButton = document.getElementById('dog-gen-button')


function whereMyDogs() {
    fetch(DOGAPIURL)
        .then(function dogParse(rawData) {
            return rawData.json();
        })
        .then(function (data) {
            randoDogoUrl.src = data.message
        })

}
whereMyDogs()

dogGenButton.addEventListener('click', whereMyDogs);

// =======================Weather============================

const WEATHERAPIURL = "https://goweather.herokuapp.com/weather/";
let cityInput = document.getElementById('city-input');
console.log(cityInput.value)
let cityText = cityInput.value;
let weatherGenButton = document.getElementById('weather-button')
let weatherResults = document.getElementById('weather-results')
let weatherResultsList = document.getElementById('weather-results-list')

function whatsMyWeather() {
    cityText = cityInput.value;
    console.log('whatsMyWeather fired', cityText)
    fetch(WEATHERAPIURL + cityText)
        .then(function weatherParse(rawData) {
            return rawData.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.temperature)

            let
                temperature = data.temperature,
                wind = data.wind,
                description = data.description,
                forecastArray = data.forecast,
                ul = document.createElement('ul');

            // ul.textContent =
            //     "<li>" +
            //     temperature + "</li>";
            // weatherResultsList.appendChild(li);
            // li.textContent = "Wind: " + wind
            // weatherResultsList.appendChild(li);
            // li.textContent = description
            // weatherResultsList.appendChild(li);
            weatherResultsList.innerHTML =
                "<li class='list-group-item'> Temperature: " + temperature + "</li>" +
                "<li class='list-group-item'> Wind:        " + wind + "</li>" +
                "<li class='list-group-item'> Description: " + description + "</li>"
        })
}
whatsMyWeather()

weatherGenButton.addEventListener('click', whatsMyWeather);