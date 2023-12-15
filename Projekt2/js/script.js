document.addEventListener('DOMContentLoaded', function () {
    const szimbolumok = ['Γ','Δ','Ξ','Π','Σ','Φ','Ψ','Ω'];
    const duplazottSzimbolumok = szimbolumok.concat(szimbolumok);
    let kevertSzimbolumok = keveres(duplazottSzimbolumok);
    let felforditott = [];
    let egyezo = [];
    
    const jatekContainer = document.getElementById('jatek_container');

    function ujKartya(szimbolum) {
        const kartya = document.createElement('div');
        kartya.classList.add('kartya');

        const kartyaBelso = document.createElement('div');
        kartyaBelso.classList.add('kartya_belso');
        kartya.appendChild(kartyaBelso);

        const eleje = document.createElement('div');
        eleje.classList.add('kepe', 'eleje');
        eleje.textContent = ''; 
        kartyaBelso.appendChild(eleje);

        const hatulja = document.createElement('div');
        hatulja.classList.add('kepe', 'hatulja');
        hatulja.textContent = szimbolum;
        kartyaBelso.appendChild(hatulja);

        kartya.addEventListener('click', () => kartyaFordit(kartya, szimbolum));
        return kartya;
    }

    function kartyaFordit(kartya, szimbolum) {
        if (felforditott.length < 2 && !felforditott.includes(kartya) && !egyezo.includes(kartya)) {
            kartya.classList.add('forditott');
            felforditott.push(kartya);

            if (felforditott.length === 2) {
                setTimeout(() => egyezesVizsgalat(), 500);
            }
        }
    }

    function egyezesVizsgalat() {
    const [kartya1, kartya2] = felforditott;
    const szimbolum1 = kartya1.querySelector('.hatulja').textContent;
    const szimbolum2 = kartya2.querySelector('.hatulja').textContent;

    if (szimbolum1 === szimbolum2) {
        egyezo.push(kartya1, kartya2);
        felforditott = [];

        if (egyezo.length === kevertSzimbolumok.length) {
            setTimeout(() => alert('Gratulálok!'), 200);
        }
    } else {
        setTimeout(() => {
            kartya1.classList.remove('forditott');
            kartya2.classList.remove('forditott');
            felforditott = [];
        }, 500);
    }
}

    function keveres(array) {
        const kevert = array.slice();
        for (let i = kevert.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [kevert[i], kevert[j]] = [kevert[j], kevert[i]];
        }
        return kevert;
    }

    kevertSzimbolumok.forEach(szimbolum => jatekContainer.appendChild(ujKartya(szimbolum)));
});
