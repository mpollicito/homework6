$(document).ready(function () {

    let displayWeather = $(".weather-temp");

    function searchWeather() {
        let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=Hartford&appid=121dbfe48a774b52280de2af5c07925e"
        $.ajax({
            type: "GET",
            url: queryUrl
        })
            .then(function (response) {
                console.log(response);
                let temp = "Temperature: " + convertKelvin(response.main.temp) + " °F";
                let humidity = "Humidity: " + response.main.humidity;
                let windSpeed = "Wind Speed: " + response.wind.speed + " mph";

                displayWeather.append(temp + "<br>", humidity + "<br>", windSpeed + "<br>");
            })

        let uvindexUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=121dbfe48a774b52280de2af5c07925e&lat=41.77&lon=-72.77"
        $.ajax({
            type: "GET",
            url: uvindexUrl
        })
            .then(function (response) {
                console.log(response);
                let uvIndex = "UV Index: " + response.value;

                displayWeather.append(uvIndex);
            })
    }

    searchWeather();


    let convertKelvin = (kelvin) => {
        return parseInt(((((kelvin) - 273.15) * 1.8) + 32));
    }

});