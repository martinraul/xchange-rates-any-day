import { showCurrency } from "./ui.js";

export function loadCurrencyFromApi($currency,$date,ul) {
  fetch(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {      
     showCurrency(respuestaJSON,$date,$currency,ul);
    })
    .catch((error) => console.error("Failed", error));
}
