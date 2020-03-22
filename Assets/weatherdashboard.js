
var apikey = "&appid=9acd89a24bebd50ecefa66e22238d645";
var api_path= "http://api.openweathermap.org/data/2.5/weather?q=";
var units = "&units=metric";


function weatherRequest(city){
    var weatherURL = api_path + city + apikey + units;
    $.ajax({
        url:weatherURL,
        method:"GET"
    }).then(function(response){
        console.log(response);
        var temperature = $("#temperature").text(weather.main.temp);
        var humidity = $("#humidity").text(weather.main.humidity);
        var windspeed = $("#windspeed").text(weather.wind.speed);

        $("#city").empty();
        $("#city").append(temperature, humidity, windspeed);
    });
}

//function weatherforecast(city){
    //var forecast_path = "http://api.openweathermap.org/data/2.5/forecast?q=";
    //var forecastURL = forecast_path + city + apikey + units;
    //$.ajax({
       // url:forecastURL,
       // method: "GET"
    //}).then(function(response){
       // console.log(response);
        
    //})
//}
$("#submit").on("click", function(event) {
    event.preventDefault();
    var city = $("#city").val().trim();

    weatherRequest(city);
});

