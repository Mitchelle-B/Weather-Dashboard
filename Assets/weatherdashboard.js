
var apikey = "&appid=9acd89a24bebd50ecefa66e22238d645";
var api_path= "http://api.openweathermap.org/data/2.5/weather?q=";
var iconURL= "http://openweathermap.org/img/w/"
var units = "&units=metric";


function weatherRequest(city){
    console.log(city)
    var weatherURL = api_path + city + apikey + units;
    $.ajax({
        url:weatherURL,
        method:"GET"
    }).then(function(response) {
        
        console.log(response);
        var location = $("#location").text("City: " + city);
        console.log(city);
        var temperature = $("#temperature").text("Temperature: " + response.main.temp);
        var humidity = $("#humidity").text("Humidity: " + response.main.humidity);
        var windspeed = $("#windspeed").text("Wind Speed:" + response.wind.speed);

        $("#city").val("");
        //$("#city").append(temperature, humidity, windspeed);
    });
}

function weatherforecast(city){
    var forecast_path = "http://api.openweathermap.org/data/2.5/forecast?q=";
    var forecastURL = forecast_path + city + apikey + units;
    $.ajax({
       url:forecastURL,
       method: "GET"
    }).done(function(response){
       console.log(response);

       // Day 1 forecast
       var forecastDate1 = $("#date1").text("Date: " + response.list[1].dt_txt);
       var forecasttemperature1 = $("#forecasttemperature1").text("Temperature: " + response.list[1].main.temp);
       var humidity1 = $("#forecasthumidity1").text("Humidity: " + response.list[1].main.humidity);
       var description1 = $("#description1").text("Description:" + response.list[1].weather[0].description);
       var icon1 = $("#icon1").html("<img src=" + iconURL + response.list[1].weather[0].icon + apikey  + ".png' alt='Icon depicting current weather.'>");

    
       //Day 2 forecast 

       var forecastDate2 = $("#date2").text("Date: " + response.list[9].dt_txt);
       var forecasttemperature2 = $("#forecasttemperature2").text("Temperature: " + response.list[9].main.temp);
       var humidity2 = $("#forecasthumidity2").text("Humidity: " + response.list[9].main.humidity);
       var description2 = $("#description2").text("Description:" + response.list[9].weather[0].description);
       var icon2 = $("#icon2").html("<img src=url" + iconURL + response.list[9].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

       // Day 3 forecast

       var forecastDate3 = $("#date3").text("Date: " + response.list[17].dt_txt);
       var forecasttemperature3 = $("#forecasttemperature3").text("Temperature: " + response.list[17].main.temp);
       var humidity3 = $("#forecasthumidity3").text("Humidity: " + response.list[17].main.humidity);
       var description3 = $("#description3").text("Description:" + response.list[17].weather[0].description);
       var icon3 = $("#icon3").html("<img src=" + iconURL + response.list[17].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

       // Day 4 forecast 

       var forecastDate4 = $("#date4").text("Date: " + response.list[25].dt_txt);
       var forecasttemperature4 = $("#forecasttemperature4").text("Temperature: " + response.list[25].main.temp);
       var humidity4 = $("#forecasthumidity4").text("Humidity: " + response.list[25].main.humidity);
       var description4 = $("#description4").text("Description:" + response.list[25].weather[0].description);
       var icon4 = $("#icon4").html("<img src=" + iconURL + response.list[25].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

       // Day 5 forecast 

       var forecastDate5 = $("#date5").text("Date: " + response.list[33].dt_txt);
       var forecasttemperature5 = $("#forecasttemperature5").text("Temperature: " + response.list[33].main.temp);
       var humidity5 = $("#forecasthumidity5").text("Humidity: " + response.list[33].main.humidity);
       var description5 = $("#description5").text("Description:" + response.list[33].weather[0].description);
       var icon5 = $("#icon5").html("<img src=" + iconURL + response.list[33].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
       
       $("#city").val("");

    });
}

$("#submit").click (function(event) {
    event.preventDefault();
    var locations = JSON.parse(localStorage.getItem( "location" ))
    if (locations === null){
        locations = []
    }
    var city = $("#city").val().trim();
    locations.push(city)
    localStorage.setItem( "location", JSON.stringify(locations))
    weatherRequest(city);
    weatherforecast(city);
});
