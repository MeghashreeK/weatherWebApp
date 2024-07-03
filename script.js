let city=document.querySelector(".city");
let weatherIcon=document.querySelector(".weather-icon");
let weather=document.querySelector(".weather");

const apiKey="ecb737a0917e9b44a5112d06433245b1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    // console.log(data)
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity+" %";
    document.querySelector(".Wind").innerHTML=data.wind.speed+" km/hr";
    // console.log(data.weather[0].main);
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    else {
        weatherIcon.src="snow.png";
    }
    weather.style.display="flex";
    input.value="";
    
}
checkWeather(city);
let button=document.getElementById("button");
let input=document.getElementById("input");

button.addEventListener("click",()=>{
    checkWeather(input.value);
   
})
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkWeather(input.value);
    }
});
