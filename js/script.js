let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let USD = 4.50;
let AUD = 3.05;
let EUR = 4.70;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = plnElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = pln / EUR;
            break;
        case "USD":
            result = pln / USD;
            break;
        case "AUD":
            result = pln / AUD;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`
})