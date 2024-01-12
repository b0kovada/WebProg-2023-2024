const forditSzoveg = () => {
    const bemenetSzoveg = document.getElementById("szovegInput").value;
    const megforditottSzoveg = bemenetSzoveg.split("").reverse().join("");
    document.getElementById("eredmeny").innerText = megforditottSzoveg;
};