const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");


// Convert Temperature
convertBtn.addEventListener("click", () => {

    const value = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Clear previous error
    errorMessage.textContent = "";

    // Validate empty or invalid input
    if (temperatureInput.value.trim() === "" || isNaN(value)) {
        showError("Please enter a valid temperature.");
        resetResults();
        return;
    }


    // Absolute zero validation
    if (unit === "celsius" && value < -273.15) {
        showError("Temperature cannot be below absolute zero (-273.15°C).");
        resetResults();
        return;
    }

    if (unit === "fahrenheit" && value < -459.67) {
        showError("Temperature cannot be below absolute zero (-459.67°F).");
        resetResults();
        return;
    }

    if (unit === "kelvin" && value < 0) {
        showError("Kelvin temperature cannot be below 0 K.");
        resetResults();
        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Celsius
    if (unit === "celsius") {

        celsius = value;

        fahrenheit = (value * 9 / 5) + 32;

        kelvin = value + 273.15;
    }


    // Fahrenheit
    else if (unit === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;

        fahrenheit = value;

        kelvin = (value - 32) * 5 / 9 + 273.15;
    }


    // Kelvin
    else if (unit === "kelvin") {

        celsius = value - 273.15;

        fahrenheit = (value - 273.15) * 9 / 5 + 32;

        kelvin = value;
    }


    // Display results
    celsiusResult.textContent = formatTemperature(celsius) + " °C";

    fahrenheitResult.textContent = formatTemperature(fahrenheit) + " °F";

    kelvinResult.textContent = formatTemperature(kelvin) + " K";

});


// Format numbers
function formatTemperature(value) {

    return Number(value.toFixed(2));
}


// Show error
function showError(message) {

    errorMessage.textContent = message;
}


// Reset results
function resetResults() {

    celsiusResult.textContent = "—";

    fahrenheitResult.textContent = "—";

    kelvinResult.textContent = "—";
}