import { updateDataInHeader } from "./ui.js";
import { updateDataInList } from "./ui.js";

export function getCurrencyList() {
  let $currency = document.querySelector("#select-menu").value;
  let $date = document.querySelector("#date").value;
  const ul = document.querySelector("#list");
  console.log(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`);

  fetch(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      updateDataInHeader(ul, $currency, $date);

      Object.keys(respuestaJSON.rates).forEach(($currency) => {
        updateDataInList(ul, $currency, respuestaJSON);
      });
    })
    .catch((error) => console.error("Failed", error));
}
