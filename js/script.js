{


    const calculateResult = (pln, currency) => {

        const USD = 4.50;
        const AUD = 3.05;
        const EUR = 4.70;

        switch (currency) {
            case "EUR":
                return pln / EUR;

            case "USD":
                return pln / USD;

            case "AUD":
                return pln / AUD;

        }
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        
        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const pln = plnElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(pln, currency);

        resultElement.innerText = `${result.toFixed(2)} ${currency}`
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (onFormSubmit));

    };

    init();

}