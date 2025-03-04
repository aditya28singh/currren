// API URL for live conversion rates
const EXCHANGE_API = "https://api.exchangerate-api.com/v4/latest/USD";

// Function to populate currency dropdowns
async function initializeCurrencies() {
    const response = await fetch(EXCHANGE_API);
    const currencyData = await response.json();
    const currencyList = Object.keys(currencyData.rates);

    let sourceDropdown = document.getElementById("initialCurrency");
    let destinationDropdown = document.getElementById("convertTo");

    currencyList.forEach(code => {
        let optionA = document.createElement("option");
        let optionB = document.createElement("option");

        optionA.value = optionB.value = code;
        optionA.textContent = optionB.textContent = code;

        sourceDropdown.appendChild(optionA);
        destinationDropdown.appendChild(optionB);
    });

    // Default selection
    sourceDropdown.value = "USD";
    destinationDropdown.value = "EUR";
}

// Function to compute conversion
async function computeExchange() {
    let amount = document.getElementById("moneyInput").value;
    let sourceCurrency = document.getElementById("initialCurrency").value;
    let targetCurrency = document.getElementById("convertTo").value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    // Fetch exchange rates
    const response = await fetch(EXCHANGE_API);
    const rateData = await response.json();

    let conversionRate = rateData.rates[targetCurrency] / rateData.rates[sourceCurrency];
    let convertedAmount = (amount * conversionRate).toFixed(2);

    // Display the result
    document.getElementById("conversionResult").textContent = 
        `${amount} ${sourceCurrency} = ${convertedAmount} ${targetCurrency}`;
}

// Load currency options when page loads
window.onload = initializeCurrencies;
