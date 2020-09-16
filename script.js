let searchButton = $("btn btn-info")
let displayWeather = $(".weather-temp");
let apiKey = "appid=121dbfe48a774b52280de2af5c07925e"

$(document).ready(function () {
    function searchWeather() {
        let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=Hartford&" + apiKey
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

        let uvindexUrl = "https://api.openweathermap.org/data/2.5/uvi?" + apiKey + "&lat=41.77&lon=-72.77"
        $.ajax({
            type: "GET",
            url: uvindexUrl
        })
            .then(function (response) {
                console.log(response);
                let uvIndex = "UV Index: " + response.value;

                displayWeather.append(uvIndex);
            })

        let convertKelvin = (kelvin) => {
            return parseInt(((((kelvin) - 273.15) * 1.8) + 32));
        }
    }

    searchWeather();
});

    // Disabled for review/implementation

    // for (var i = "#"; i++) {
    //     var conditionFavorable = ;
    //     var conditionModerate = ;
    //     var conditionSevere = ;

    //     if (conditionFavorable === true) {
    //         $("#" + i + "button").addClass("favorable");
    //     } else if (conditionModerate === true) {
    //         $("#" + i + "button").addClass("moderate");
    //     } else (conditionSevere === true) {
    //         $("#" + i + "button").addClass("severe");
    //     }
    // }
    // searchButton.on("click", function () {
    //     var searchDay = $(input).attr("data-day");
    //     var input = $("#");
    //     localStorage.setItem(searchDay, input);
    // });

    // localStorage.getItem()
    // localStorage.setItem(searchDay, input)
    // localStorage.clear()

        // let convertKelvin = (kelvin) => {
    //     return parseInt(((((kelvin) - 273.15) * 1.8) + 32));
    // }

