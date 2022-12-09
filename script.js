// need to add an event listener that activates the API once the search button has been clicked. 
// once i have that then i need to push it into the local storage as well as display the data that i pulled.
let searchButton = document.getElementById("Btn");
let Searchbar = document.getElementById("location");
let previousSearches = [];


let cityLocation = () => {
    let appid = "&appid=f3e1e373d7139ef02d43f57be5e942ea"
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q="; //this is the weathermap API URL i think??
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
        //let weatherIcon = data.icon;
        
        // wanting to log the search results in the console. not quite sure what is going on. how can i pull specific data?. Ask around!
        console.log(`
            City:${cityName}
            Temp:${currentTemp, maxTemp, minTemp},
            Wind:${cityWind},
            humidity:${cityHumidity},
            icon:${weatherIcon},`
            )            
                let nameEl = document.getElementById("");
                let currentTempEl = document.getElementById("");
                let maxTempEl = document.getElementById("");
                let minTempEl = document.getElementById("");
                let windEl = document.getElementById("");
                let humidEl = document.getElementById("");
                let iconEl = document.getElementById("");
    
                
                nameEl.textContent = 
                currentTempEl.textContent = 
                maxTempEl.textContent = 
                minTempEl.textContent = 
                windEl.textContent = 
                humidEl.textContent = 
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



    





//API: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}  or is it: api.openweathermap.org   ?????
//API Key: f3e1e373d7139ef02d43f57be5e942ea