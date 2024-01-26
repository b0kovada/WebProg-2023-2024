function osszead(a, b) {
    return a + b;
  }

  function kivonas(a, b) {
    return a - b;
  }

  function szorzas(a, b) {
    return a * b;
  }

  function osztas(a, b) {
    return a / b;
  }

  function szamol(alapmuvelet, operandus1, operandus2) {
    return alapmuvelet(operandus1, operandus2);
  }

  let result = szamol(osszead, 5, 3);
  console.log("Az összeadás eredménye: 8, a számolt érték: " + result);

  result = szamol(kivonas, 8, 2);
  console.log("A kivonás eredménye: 6, a számolt érték: " + result);

  result = szamol(szorzas, 4, 6);
  console.log("A szorzás eredménye: 24, a számolt érték: " + result);

  result = szamol(osztas, 9, 3);
  console.log("Az osztás eredménye: 3, a számolt érték: " + result);