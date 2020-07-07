//TO DO next weeks..add amount calculator, show selected currency only

let button = document.querySelector("#submit-button");
let resetButton = document.querySelector("#reset-button");

button.onclick = function () {
  let $currency = document.querySelector("#select-menu").value;
  let $date = document.querySelector("#date").value;
  console.log(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`);
  console.log($currency);
  console.log($date);

  fetch(`https://api.exchangeratesapi.io/${$date}?base=${$currency}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      console.log(respuestaJSON.date);
      let h2 = document.querySelector("#h2");
      h2.textContent = `How much was the ${$currency} in ${$date}`;
      let ul = document.querySelector("#list");
      ul.textContent = "";
      console.log(respuestaJSON.base);
      console.log(`the uss was ${respuestaJSON.rates.USD}`);

      Object.keys(respuestaJSON.rates).forEach(($currency) => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `<li>${$currency}: ${respuestaJSON.rates[$currency]}</li>`;
        ul.appendChild(li);
      });
    })
    .catch((error) => console.error("Failed", error));
};

resetButton.onclick = function () {
  document.getElementById("list").textContent = "";
};
