// Létrehozunk egy üres tömböt
let tomb = [];

// Gombok
const elsoGomb = document.getElementById('elsogomb');
const masodikGomb = document.getElementById('masodikgomb');
const harmadikGomb = document.getElementById('harmadikgomb');
const osszegElemGomb = document.getElementById('osszegelemgomb');
const szovegInput = document.getElementById('szoveginput');
const hozzaadGomb = document.getElementById('hozzaadgomb');
const tombHosszaGomb = document.getElementById('tombhosszagomb');
const indexInput = document.getElementById('indexinput');
const torlesGomb = document.getElementById('torlesgomb');
const tombKiiras = document.getElementById('tombkiiras');

// Gomb eseménykezelők
elsoGomb.addEventListener('click', () => {
    if (tomb.length > 0) {
        tombKiiras.textContent = tomb[0];
    }
});

masodikGomb.addEventListener('click', () => {
    if (tomb.length > 1) {
        tombKiiras.textContent = tomb[1];
    }
});

harmadikGomb.addEventListener('click', () => {
    if (tomb.length > 2) {
        tombKiiras.textContent = tomb[2];
    }
});

osszegElemGomb.addEventListener('click', () => {
    tombKiiras.textContent = tomb.join(', ');
});

hozzaadGomb.addEventListener('click', () => {
    const szoveg = szovegInput.value;
    tomb.push(szoveg);
    szovegInput.value = '';
});

tombHosszaGomb.addEventListener('click', () => {
    tombKiiras.textContent = `A tömb ${tomb.length} elemet tartalmaz.`;
});

torlesGomb.addEventListener('click', () => {
    const index = parseInt(indexInput.value);
    if (!isNaN(index) && index >= 0 && index < tomb.length) {
        tomb.splice(index, 1);
        indexInput.value = '';
    }
});