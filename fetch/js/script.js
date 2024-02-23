
function fgv(){
    document.getElementById("adatok").addEventListener("submit", function(event) {
        const felhasznaloId = document.getElementById("felhasznId").value;
        fetch(`https://jsonplaceholder.org/users/?${felhasznaloId}`)
            .then(response => {
                return response.json();
            })
            .then(user => {
                const felhasznaloAdat = `
                    <h2>Felhasználó adatai:</h2>
                    <p>ID: ${user.id}</p>
                    <p>Név: ${user.name}</p>
                    <p>Felhasználónév: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Cím: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                    <p>Telefonszám:: ${user.phone}</p>
                    <p>Weboldal: ${user.website}</p>
                    <p>Cég: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                `;
                document.getElementById("lekertAdatok").innerHTML = felhasznaloAdat;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
}
