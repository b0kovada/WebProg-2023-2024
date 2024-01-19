function getNumberFromString(s) {
  let betuKi = s.replace(/[^0-9]/g, "");
  return parseInt(betuKi);
}
