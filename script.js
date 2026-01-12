

const apiKey = "155b392198c5db741cd226cf090513f6";

const url = "https://api.openweathermap.org/data/2.5/weather?q="
const url1 = "&appid=155b392198c5db741cd226cf090513f6&units=metric"

const weatherIcon = document.querySelector(".weather-icon")


async function show() {
    try {
        var cityName = document.getElementById("city").value;
        const apiUrl = url + cityName + url1;

        const data = await fetch(apiUrl);
        const jsonData = await data.json();

        document.querySelector(".cityna").innerHTML = jsonData.name;
        document.querySelector(".degree").innerHTML = Math.round(jsonData.main.temp) + "&deg;C";
        document.querySelector(".humidity").innerHTML = jsonData.main.humidity + "%";
        document.querySelector(".wind").innerHTML = jsonData.wind.speed + "km/h";


        var imgName = jsonData.weather[0].main.toLowerCase();

        weatherIcon.src = "images/" + imgName + ".png";

        document.getElementById("city").value = "";

    }
    catch (error) {
        () => {
            alert("Enter the city name correctly")
            console.log("Error")
        }
        alert("Enter the city name correctly")
    }

}   
