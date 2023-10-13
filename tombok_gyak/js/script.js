var tomb = ["Első", "Második", "Harmadik"];

function megjelenitElem(index) {
  var elem = tomb[index];
  document.getElementById("kiiras").innerHTML = elem;
}

function osszesElem() {
  document.getElementById("kiiras").innerHTML = tomb.join(", ");
}

function hozzaadElem() {
  var elemUj = document.getElementById("ujElem").value;
  tomb.push(elemUj);
  document.getElementById("kiiras").innerHTML = "Az új elem hozzáadva: " + elemUj;
}

function tombHossza() {
  var hossz = tomb.length;
  document.getElementById("kiiras").innerHTML = "A tömb " + hossz + " elemet tartalmaz.";
}

function torolElem() {
  var index = document.getElementById("torolIndex").value;
  if (index >= 0 && index < tomb.length) {
    var toroltElem = tomb.splice(index, 1)[0];
    document.getElementById("kiiras").innerHTML = "Törölt elem: " + toroltElem;
  } else {
    document.getElementById("kiiras").innerHTML = "Hibás index.";
  }
}