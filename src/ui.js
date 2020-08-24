import { loadCurrencyFromApi } from "./service.js";
const ul = document.querySelector("#list");


export function getButtonsReady() {
  let submitButton = document.querySelector("#submit-button");
  submitButton.onclick = function () {
    getSelectedCurrencyValue();
  };

  let resetButton = document.querySelector("#reset-button");
  resetButton.onclick = function () {
    document.getElementById("list").textContent = "";
    let h2 = document.getElementById("h2")
    h2.textContent = "Enter the date and base currency";
  };
}

export function getSelectedCurrencyValue() {
  const $currency = document.getElementById("select-menu").value;
  const $date = document.querySelector("#date").value;
  loadCurrencyFromApi($currency,$date,ul);
}

export function updateDate() {
  const $date = document.querySelector("#date");
  $date.setAttribute("max", new Date().toISOString().split("T")[0]);
  $date.setAttribute("value", new Date().toISOString().split("T")[0]);
}

export function showCurrency(respuestaJSON, $date, $currency, ul) {
  updateDataInHeader(ul, $currency, $date);
  Object.keys(respuestaJSON.rates).forEach(($currency) => {
    updateDataInList(ul, $currency, respuestaJSON);
  });
}

export function updateDataInHeader(ul, $currency, $date) {
  let h2 = document.querySelector("#h2");
  h2.textContent = `How much was the ${$currency} in ${$date}`;
  ul.textContent = "";
}

export function updateDataInList(ul, $currency, respuestaJSON) {
  let li = document.createElement("li");
  li.className = "list-group-item list-group-item-info";
  li.innerHTML = `<li>${$currency}: ${respuestaJSON.rates[$currency]}</li>`;
  ul.appendChild(li);
}
