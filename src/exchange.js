export function getCurrencyList() {
  let $currency = document.querySelector("#select-menu").value;
  let $date = document.querySelector("#date").value;
  console.log(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`);

  fetch(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      let h2 = document.querySelector("#h2");
      h2.textContent = `How much was the ${$currency} in ${$date}`;
      let ul = document.querySelector("#list");
      ul.textContent = "";

      Object.keys(respuestaJSON.rates).forEach(($currency) => {
        let li = document.createElement("li");
        li.className = "list-group-item list-group-item-info";
        li.innerHTML = `<li>${$currency}: ${respuestaJSON.rates[$currency]}</li>`;
        ul.appendChild(li);
      });
    })
    .catch((error) => console.error("Failed", error));
}
