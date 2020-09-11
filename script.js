let displayWeather = $(".weather-temp");

function searchWeather () {
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=Hartford&appid=121dbfe48a774b52280de2af5c07925e"
    $.ajax({
        type: "GET",
        url: queryUrl
    })
    .then(function(response) {
        console.log(response);
        let temp = "Temperature: " + convertKelvin(response.main.temp);
        let humidity = "Humidity: " + response.main.humidity;
        let windSpeed = "Wind Speed: " + response.wind.speed;

        displayWeather.append(temp + "<br>", humidity + "<br>", windSpeed);
    })
}

searchWeather();

let convertKelvin = (kelvin) => {
    return parseInt(((((kelvin) - 273.15) * 1.8) + 32));
}
