//TO DO next weeks..add amount calculator, show selected currency only

import { getCurrencyList } from "./exchangeList.js";
import { updateDate } from "./date.js";

let submitButton = document.querySelector("#submit-button");
let resetButton = document.querySelector("#reset-button");

submitButton.onclick = function () {
  getCurrencyList(); 
};

resetButton.onclick = function () {
  document.getElementById("list").textContent = "";
  h2.textContent = "Enter the date and base currency";
};

updateDate();
