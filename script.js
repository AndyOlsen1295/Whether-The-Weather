// need to add an event listener that activates the API once the search button has been clicked. 
// once i have that then i need to push it into the local storage as well as display the data that i pulled.
let searchButton = document.getElementById("Btn");
let Searchbar = document.getElementById("location");
let previousSearches = [];
let nameEl = document.getElementById("location");
let currentTempEl = document.getElementById("currentTemp");
// let maxTempEl = document.getElementById("");
// let minTempEl = document.getElementById("");
// let windEl = document.getElementById("");
// let humidEl = document.getElementById("");
// let iconEl = document.getElementById("");
let appid = "&appid=f3e1e373d7139ef02d43f57be5e942ea"
let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";


// this function pulls the weather data for current day
let cityLocation = () => {
    let userSearch = Searchbar.value;  
   
    let results = apiUrl + userSearch + appid;
    fetch(results)    
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
    

    let grabCityInfo = () => { 
        let cityName = data.city.name;
        let currentTemp = data.list[0].main.temp;
        let maxTemp = data.list[0].main.temp_max;
        let minTemp = data.list[0].main.temp_min;
        let cityWind = data.list[0].wind.speed;
        let cityHumidity = data.list[0].main.humidity;  
        //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
        // logs user search results
        console.log(`
            City:${cityName}
            Temp:${currentTemp, maxTemp, minTemp},
            Wind:${cityWind},
            humidity:${cityHumidity},`
            )            
                
            let nameEl = document.getElementById("location");
            let currentTempEl = document.getElementById("currentTemp");
            let maxTempEl = document.getElementById("todaysHigh");
            let minTempEl = document.getElementById("todaysLow");
            let windEl = document.getElementById("todaysWind");
            let humidEl = document.getElementById("todaysHumidity");
             // let iconEl = document.getElementById("");
    
                
            nameEl.textContent = `location: ${data.city.name}`
            currentTempEl.innerHTML = `currentTemp: ${data.list[0].main.temp}`
            maxTempEl.innerText = `todaysHigh: ${data.list[0].main.temp_max}`
            minTempEl.textContent = `todaysLow: ${data.list[0].main.temp_min}`
            windEl.textContent = `todaysWind: ${data.list[0].wind.speed}`
            humidEl.textContent = `todaysHumidity: ${data.list[0].main.humidity}`
            iconEl.setAttribute("src", apiUrl)
            
        };
        grabCityInfo();
    })

};

//this triggers or "calls" the function called userCity. sets it into motion. 
var userCity = function() {
}

//this triggers the function "city location" after the user has clicked search.
searchButton.addEventListener("click", function(){
    cityLocation()
});



//copied from up above. need to switch out the currents to future dates information.
let futureForecast = () => {
   
    let userSearch = Searchbar.value;  
   
    let results = apiUrl + userSearch + appid;
    fetch(results)    
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
    

let grabCityInfo = () => { 
    let cityName = data.city.name
    let maxTemp = data.list[6].main.temp_max;
    let minTemp = data.list[6].main.temp_min;
    let cityWind = data.list[6].wind.speed;
    let cityHumidity = data.list[6].main.humidity;  
    //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
    // logs user search results
    console.log(`
        City:${cityName}
        Temp:${maxTemp, minTemp},
        Wind:${cityWind},
        humidity:${cityHumidity},
        icon:${weatherIcon},`
        )            
            let nameEl = document.getElementById("location");
            let maxTempEl = document.getElementById("tomorrowsHigh");
            let minTempEl = document.getElementById("tomorrowsLow");
            let windEl = document.getElementById("tomorrowsWind");
            let humidEl = document.getElementById("tomorrowsHumidity");
            //let iconEl = document.getElementById("");
    
                
                maxTempEl.textContent = `tomorrowsHigh: ${data.list[6].main.temp_max}`
                minTempEl.textContent = `tomorrowsLow: ${data.list[6].main.temp_min}`
                windEl.textContent = `tomorrowsWind: ${data.list[6].wind.speed}`
                humidEl.textContent = `tomorrowsHumidity: ${data.list[6].main.humidity}`
                //iconEl.setAttribute("src", apiUrl)
            
        };
        grabCityInfo();
    })

};

    





//API: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}  or is it: api.openweathermap.org   ?????
//API Key: f3e1e373d7139ef02d43f57be5e942ea