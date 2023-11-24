function fuggveny(){
let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
};

let osszeg = 0;
let kiiras = "";

for(i in fizetes) {
    osszeg += fizetes[i];
    kiiras += i + " " + fizetes[i] + "Ft-ot keres, ";
}

kiiras += "A fizetésük összesen: " + osszeg;
console.log(kiiras);
document.getElementById("ki").innerHTML = kiiras;
}