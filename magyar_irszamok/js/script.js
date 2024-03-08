function fgv(){
    document.getElementById("adatok").addEventListener("submit", function(event) {
        const telepulesNeve = document.getElementById("telepulesNev").value;
        fetch(`https://hur.webmania.cc/zips/${telepulesNeve}.json`)
            .then(response => {
                return response.json();
            })
            .then(zips => {
                const telepulesAdat = `
                    <h2>Teleplülés adatai:</h2>
                    <p>Név: ${zips.name}</p>
                    <p>Irányítószám ${zips.zip}</p>
                `;
                document.getElementById("lekertAdatok").innerHTML = telepulesAdat;
            })
            .catch(error => {
                console.error('Nincs a keresésnek megfelelő találat.', error);
            });
    });
}