const apikey = '17b9ca8b261e9a161a6ea3a29f95e61c';
const apiUrl=' https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox= document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather = document.querySelector(".weather_icon");
async function checkWeather(city){
    const res = await fetch(apiUrl +`&q=${city}`+ `&appid=${apikey}`);
    if(res.status == 404 | res.status ==400){
        document.querySelector('.errormsg').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{
        var data = await res.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp").innerHTML = data.main.temp + ' °C';
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + ' °C';
    document.querySelector(".humidity").innerHTML = data.main.humidity+'%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weather.src="images/cloudy.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weather.src="../images/sunny.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weather.src="../images/rainy.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weather.src="../images/cloudy.png";
    }
    else if(data.weather[0].main == 'Mist'){
        weather.src="../images/humidity.png";
    }
    document.querySelector('.errormsg').style.display='none';
    document.querySelector('.weather').style.display='block';
    }
    

}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkWeather(searchBox.value);
    }
});