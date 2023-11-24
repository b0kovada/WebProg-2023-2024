let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"}
]

function objToString(obj) { return `${obj.firstName} ${obj.lastName} = ${obj.job}`; }

function kiiratas() {
    for(let i = 0; i < heroes.length; i++)
        document.getElementById("kiiras").innerHTML += objToString(heroes[i]) + "<br>";
}