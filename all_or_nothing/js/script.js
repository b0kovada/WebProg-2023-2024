const possiblyPerfect = (key, answers) => {
    let helyesValaszSzamlalo = 0;
    let osszesHelytelenValasz = 0;
  
    for (let i = 0; i < key.length; i++) {
      const vartValasz = key[i];
      const kapottValasz = answers[i];
  
      if (vartValasz !== "_") {
        osszesHelytelenValasz++;
  
        if (vartValasz === kapottValasz) {
          helyesValaszSzamlalo++;
        }
      }
    }
  
    return helyesValaszSzamlalo === osszesHelytelenValasz || helyesValaszSzamlalo === 0;
  };