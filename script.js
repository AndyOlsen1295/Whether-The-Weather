// need to add an event listener that activates the API once the search button has been clicked. 
// once i have that then i need to push it into the local storage as well as display the data that i pulled.
let searchButton = document.getElementById("Btn");
let Searchbar = document.getElementById("location");
let previousSearches = [];
let nameEl = document.getElementById("location");
let currentTempEl = document.getElementById("currentTemp");
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
        let date = data.list[0].dt_txt;
        //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
        // logs user search results
        console.log(`
            City:${cityName}
            Temp:${currentTemp, maxTemp, minTemp},
            Wind:${cityWind},
            humidity:${cityHumidity},
            date:${date}`
            )            
                
            let nameEl = document.getElementById("location");
            let currentTempEl = document.getElementById("currentTemp");
            let maxTempEl = document.getElementById("todaysHigh");
            let minTempEl = document.getElementById("todaysLow");
            let windEl = document.getElementById("todaysWind");
            let humidEl = document.getElementById("todaysHumidity");
            let dateEl = document.getElementById("currentDay");
             // let iconEl = document.getElementById("");
    
                
            nameEl.textContent = `location: ${data.city.name}`
            currentTempEl.innerHTML = `Current: ${data.list[0].main.temp}`
            maxTempEl.innerText = `High: ${data.list[0].main.temp_max}`
            minTempEl.textContent = `Low: ${data.list[0].main.temp_min}`
            windEl.textContent = `Wind: ${data.list[0].wind.speed}`
            humidEl.textContent = `Humidity: ${data.list[0].main.humidity}`
            // dateEl.textContent =`Date: ${data.list[0].dt_txt}`
            // iconEl.setAttribute("src", apiUrl)
            
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



// same code as the currentDay function, just changed the part of the API i called information from.
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
        humidity:${cityHumidity},`
        )            
           
        let nameEl = document.getElementById("location");
        let maxTempEl = document.getElementById("tomorrowHigh");
        let minTempEl = document.getElementById("tomorrowLow");
        let windEl = document.getElementById("tomorrowWind");
        let humidEl = document.getElementById("tomorrowHumidity");
            //let iconEl = document.getElementById("");
    
        nameEl.textContent = `location: ${data.city.name}`        
        maxTempEl.textContent = `High: ${data.list[6].main.temp_max}`
        minTempEl.textContent = `Low: ${data.list[6].main.temp_min}`
        windEl.textContent = `Wind: ${data.list[6].wind.speed}`
        humidEl.textContent = `Humidity: ${data.list[6].main.humidity}`
                //iconEl.setAttribute("src", apiUrl)

                // do you think i could copy the above block of code multiple times all in the same function?

           
            
        };
        grabCityInfo();
    })

};

var userCity = function() {}

searchButton.addEventListener("click", function(){
    futureForecast()
});

let futureForecast1 = () => {
   
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
    let maxTemp = data.list[12].main.temp_max;
    let minTemp = data.list[12].main.temp_min;
    let cityWind = data.list[12].wind.speed;
    let cityHumidity = data.list[12].main.humidity;  
    //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
    // logs user search results
    console.log(`
        City:${cityName}
        Temp:${maxTemp, minTemp},
        Wind:${cityWind},
        humidity:${cityHumidity},`
        )            
           
        let nameEl = document.getElementById("location");
        let maxTempEl = document.getElementById("fd2High");
        let minTempEl = document.getElementById("fd2Low");
        let windEl = document.getElementById("fd2Wind");
        let humidEl = document.getElementById("fd2Humidity");
            //let iconEl = document.getElementById("");
    
        nameEl.textContent = `location: ${data.city.name}`        
        maxTempEl.textContent = `High: ${data.list[12].main.temp_max}`
        minTempEl.textContent = `Low: ${data.list[12].main.temp_min}`
        windEl.textContent = `Wind: ${data.list[12].wind.speed}`
        humidEl.textContent = `Humidity: ${data.list[12].main.humidity}`
                //iconEl.setAttribute("src", apiUrl)

                // do you think i could copy the above block of code multiple times all in the same function?

           
            
        };
        grabCityInfo();
    })

};

var userCity = function() {}

searchButton.addEventListener("click", function(){
    futureForecast1()
});

let futureForecast2 = () => {
   
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
    let maxTemp = data.list[16].main.temp_max;
    let minTemp = data.list[16].main.temp_min;
    let cityWind = data.list[16].wind.speed;
    let cityHumidity = data.list[16].main.humidity;  
    //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
    // logs user search results
    console.log(`
        City:${cityName}
        Temp:${maxTemp, minTemp},
        Wind:${cityWind},
        humidity:${cityHumidity},`
        )            
           
        let nameEl = document.getElementById("location");
        let maxTempEl = document.getElementById("fd3High");
        let minTempEl = document.getElementById("fd3Low");
        let windEl = document.getElementById("fd3Wind");
        let humidEl = document.getElementById("fd3Humidity");
            //let iconEl = document.getElementById("");
    
        nameEl.textContent = `location: ${data.city.name}`        
        maxTempEl.textContent = `High: ${data.list[16].main.temp_max}`
        minTempEl.textContent = `Low: ${data.list[16].main.temp_min}`
        windEl.textContent = `Wind: ${data.list[16].wind.speed}`
        humidEl.textContent = `Humidity: ${data.list[16].main.humidity}`
                //iconEl.setAttribute("src", apiUrl)

                // do you think i could copy the above block of code multiple times all in the same function?

           
            
        };
        grabCityInfo();
    })

};

var userCity = function() {}

searchButton.addEventListener("click", function(){
    futureForecast2()
});


let futureForecast3 = () => {
   
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
    let maxTemp = data.list[23].main.temp_max;
    let minTemp = data.list[23].main.temp_min;
    let cityWind = data.list[23].wind.speed;
    let cityHumidity = data.list[23].main.humidity;  
    //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
    // logs user search results
    console.log(`
        City:${cityName}
        Temp:${maxTemp, minTemp},
        Wind:${cityWind},
        humidity:${cityHumidity},`
        )            
           
        let nameEl = document.getElementById("location");
        let maxTempEl = document.getElementById("fd4High");
        let minTempEl = document.getElementById("fd4Low");
        let windEl = document.getElementById("fd4Wind");
        let humidEl = document.getElementById("fd4Humidity");
            //let iconEl = document.getElementById("");
    
        nameEl.textContent = `location: ${data.city.name}`        
        maxTempEl.textContent = `High: ${data.list[23].main.temp_max}`
        minTempEl.textContent = `Low: ${data.list[23].main.temp_min}`
        windEl.textContent = `Wind: ${data.list[23].wind.speed}`
        humidEl.textContent = `Humidity: ${data.list[23].main.humidity}`
                //iconEl.setAttribute("src", apiUrl)

                // do you think i could copy the above block of code multiple times all in the same function?

           
            
        };
        grabCityInfo();
    })

};

var userCity = function() {}

searchButton.addEventListener("click", function(){
    futureForecast3()
});


let futureForecast4 = () => {
   
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
    let maxTemp = data.list[31].main.temp_max;
    let minTemp = data.list[31].main.temp_min;
    let cityWind = data.list[31].wind.speed;
    let cityHumidity = data.list[31].main.humidity;  
    //let weatherIcon = data.icon; will need to look elsewhere to grab icons.
        
    // logs user search results
    console.log(`
        City:${cityName}
        Temp:${maxTemp, minTemp},
        Wind:${cityWind},
        humidity:${cityHumidity},`
        )            
           
        let nameEl = document.getElementById("location");
        let maxTempEl = document.getElementById("fd5High");
        let minTempEl = document.getElementById("fd5Low");
        let windEl = document.getElementById("fd5Wind");
        let humidEl = document.getElementById("fd5Humidity");
            //let iconEl = document.getElementById("");
    
        nameEl.textContent = `location: ${data.city.name}`        
        maxTempEl.textContent = `High: ${data.list[31].main.temp_max}`
        minTempEl.textContent = `Low: ${data.list[31].main.temp_min}`
        windEl.textContent = `Wind: ${data.list[31].wind.speed}`
        humidEl.textContent = `Humidity: ${data.list[31].main.humidity}`
                //iconEl.setAttribute("src", apiUrl)

                // do you think i could copy the above block of code multiple times all in the same function?

           
            
        };
        grabCityInfo();
    })

};

var userCity = function() {}

searchButton.addEventListener("click", function(){
    futureForecast4()
});





//API: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}  or is it: api.openweathermap.org   ?????
//API Key: f3e1e373d7139ef02d43f57be5e942ea