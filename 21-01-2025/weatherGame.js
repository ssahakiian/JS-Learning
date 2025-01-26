
const weatherDatabase = {
    "New York": 15,
    "London": 5,
    "Paris": 11,
    "Tokyo": 7,
    "Berlin": -1,
    "Sydney": 15
};

let selectedCity = getRandomCity();


document.getElementById("cityName").textContent = selectedCity;

function getRandomCity() {
    const cities = Object.keys(weatherDatabase);
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}


function checkWeather() {
    const guess = Number(document.getElementById("guess").value);

    if (weatherDatabase[selectedCity] !== undefined) {
        const actualTemperature = weatherDatabase[selectedCity];

        if (guess === actualTemperature) {
            document.getElementById("result").innerHTML = `<strong>You win! The temperature in ${selectedCity} is ${actualTemperature}°C.</strong>`;
        } else {
            document.getElementById("result").innerHTML = `<strong>You lose! The temperature in ${selectedCity} is ${actualTemperature}°C, but you guessed ${guess}°C.</strong>`;
        }
    } else {
        document.getElementById("result").innerHTML = `<strong>City not found in the database. Please try again.</strong>`;
    }

    selectedCity = getRandomCity();
    document.getElementById("cityName").textContent = selectedCity; 
}
