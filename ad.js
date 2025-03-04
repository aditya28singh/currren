function convert(){
    var inputCurrency = document.getElementById("inputCurrency").value;
    var baseCurrency = document.getElementById("baseCurrency").value;
    var targetCurrency = document.getElementById("targetCurrency").value;

    // static conversion rates
    var rates = {
        "USD": { "USD": 1, "EUR": 0.85 },
        "EUR": { "USD": 1.18, "EUR": 1 },
    };

    document.getElementById("output").innerHTML = inputCurrency * rates[baseCurrency][targetCurrency] + " " + targetCurrency;
};
