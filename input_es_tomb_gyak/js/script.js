const adatok = [];
function renderAdatok() {
  const kartya = document.getElementById("kartya");
  kartya.innerHTML = "";
  
  adatok.forEach((adat, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `${adat}</p>`;
    kartya.appendChild(card);
  });
}

function mentesFuggveny() {
  const input = document.getElementById("input");
  const inputErtek = input.value;
  
  if (inputErtek != "") {
    adatok.push(inputErtek);
    input.value = "";
    renderAdatok();
  }
}