function logSzoveg() {
    const gomb = document.querySelector(".btn");
    gomb.addEventListener("click",()=>{
    let szoveg=document.getElementById("szovegBe").value;
    console.log("A felhasználó által beírt szöveg :" + szoveg);
})
}
