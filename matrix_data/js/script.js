let cellaSzin = ["", "", "", ""];
let jelenlegiSzin = "red";

  function szinValtas(element) {
    const index = element.dataset.index;
    const cella = document.getElementById(`cell-${index}`);

    if (cellaSzin[index] == "") {
      cella.style.backgroundColor = jelenlegiSzin;
      cellaSzin[index] = jelenlegiSzin;
    } else {
if (jelenlegiSzin === "red") {
    cellaSzin[index] = "blue";
} else {
    cellaSzin[index] = "red";
}
cella.style.backgroundColor = cellaSzin[index];

    }
if (jelenlegiSzin === "red") {
    jelenlegiSzin = "blue";
} else {
    jelenlegiSzin = "red";
}

  }

  function renderMatrix() {
    let tartalom = "";

    for (let i = 0; i < 4; i++) {
      tartalom += `<div id="cell-${i}" class="cell" onclick="szinValtas(this)" data-index="${i}"></div>`;
    }

    document.getElementById('matrixTarolo').innerHTML = tartalom;
  }
  window.onload = renderMatrix;