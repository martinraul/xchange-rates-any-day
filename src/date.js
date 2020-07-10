export function updateDate() {
    const $date = document.querySelector("#date");
    $date.setAttribute("max", new Date().toISOString().split("T")[0]);
    $date.setAttribute("value", new Date().toISOString().split("T")[0]);
  }