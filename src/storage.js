/*
import { showCurrency } from "./service";

export function loadCurrencyFromStorage($currency) {
  const $newcurrency = JSON.parse(localStorage.getItem($currency));
  if ($currency === null) {
    throw new Error("Currency not in storage.");
  }
  showCurrency($newcurrency);
}

export function saveCurrencyInStorage($currency, $date) {
  if ($currency === undefined) {
    throw new Error("$currency is undefined");
  }
  try {
    localStorage.setItem(
      `${$currency}`,
      JSON.stringify(
        `https://api.exchangeratesapi.io/${$date}?base=${$currency}`
      )
    );
  } catch (error) {
    localStorage.clear();
    localStorage.setItem(
      `${$currency}`,
      JSON.stringify(
        `https://api.exchangeratesapi.io/${$date}?base=${$currency}`
      )
    );
  }
}
*/