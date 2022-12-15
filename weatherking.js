var search = document.querySelector("#button")

search.addEventListener('keypress', myFunction);

function myFunction(e) {
    if(e.keyCode == 13)
        getData(search.value)
}

function getData(value){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&units=metric&appid=32488fce083c29fc8f8a164ec88040c1')
.then(function (response){
    return response.json();
})
.then(function (weather){
    console.log(weather)
    document.querySelector('#city').innerHTML = weather.name;
    var tempNum = weather.main.temp;
    document.querySelector('#temp').innerHTML = "Temperture: " + tempNum.toFixed(0) + " °C";
    document.querySelector('#country').innerHTML = "Country: " + weather.sys.country;
    document.querySelector('#weather').innerHTML = "Description: " + weather.weather[0].main;
    document.querySelector('#weather_description').innerHTML = "Humidity: " + weather.main.humidity;
    document.querySelector('#wind_dir_speed').innerHTML = "Wind Speed: " + weather.wind.speed;
    var dt = new Date();
    document.getElementById('date-time').innerHTML= "Local time at your location" + "<br>" + dt.toLocaleTimeString();
})
.catch(function (err){
    console.log(err);
});
}