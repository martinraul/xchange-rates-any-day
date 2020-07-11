import { getCurrencyList } from "./exchange.js";

export function getButtonsReady() {
  let submitButton = document.querySelector("#submit-button");
  submitButton.onclick = function () {
    getCurrencyList();
  };

  let resetButton = document.querySelector("#reset-button");
  resetButton.onclick = function () {
    document.getElementById("list").textContent = "";
    h2.textContent = "Enter the date and base currency";
  };
}

export function updateDate() {
  const $date = document.querySelector("#date");
  $date.setAttribute("max", new Date().toISOString().split("T")[0]);
  $date.setAttribute("value", new Date().toISOString().split("T")[0]);
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
