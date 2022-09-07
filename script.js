var input = document.getElementById("cityInput");
var addInput = document.getElementById("add");
var cityoutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById('temp');
var windOutput = document.getElementById("wind");

var apiKey = '3045dd712ffe6e702e3245525ac7fa38';

function convertToCel(item) {

    return (item - 273).toFixed(2)
    
}



async function getWeather() {

    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${input.value}&appid=${apiKey}`)

    const jsonWeather = await weather.json();


    setInfo(jsonWeather);

}

function setInfo(data) {

    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];


    cityoutput.innerHTML = 'City  : ' + cityName;
    descOutput.innerHTML = "Description  : " + description;
    tempOutput.innerHTML = "Temp  : " + convertToCel(temp);
    windOutput.innerHTML = 'Wind  : ' + wind;

}

addInput.addEventListener("click", getWeather);