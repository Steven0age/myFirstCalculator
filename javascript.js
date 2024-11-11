var rechenergebnis = 0;
var wertA = false;
var wertB = false;
var rechenart = false;

function pressTaste(x) {
  if (wertB === false) {
    addNumberA(x);
  } else {
    addNumberB(x);
  }
}

function addNumberA(x) {
  if (wertA === false) {
    wertA = x;
    document.getElementById("ergebnis").innerHTML = wertA;
    console.log("wertA = " + wertA);
  } else {
    wertA = wertA + String(x);
    console.log("wertA = " + wertA);
    document.getElementById("ergebnis").innerHTML = wertA;
  }
}

function addNumberB(x) {
  if (wertB === true) {
    wertB = x;
    console.log("if-wertB = " + wertB);
    document.getElementById("ergebnis").innerHTML = wertB;
  } else {
    wertB = wertB + String(x);
    console.log("else-wertB = " + wertB);
    document.getElementById("ergebnis").innerHTML = wertB;
  }
}

function berechnungPlus() {
  if (wertB === true) {
    return;
  } else if (wertA !== false && wertB !== false) {
    rechenergebnis = Number(wertA) + Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    wertA = rechenergebnis;
    wertB = true;
    rechenart = "plus";
    console.log(rechenergebnis);
  } else {
    wertB = true;
    rechenart = "plus";
    console.log("WertA gespeichert:", wertA);
  }
}

function berechnungMinus() {
  if (wertB === true) {
    return;
  } else if (wertA !== false && wertB !== false) {
    rechenergebnis = Number(wertA) - Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    wertA = rechenergebnis;
    wertB = true;
    rechenart = "minus";
    console.log(rechenergebnis);
  } else {
    wertB = true;
    rechenart = "minus";
    console.log("WertA gespeichert:", wertA);
  }
}

function berechnungMal() {
  if (wertA !== false && wertB !== false) {
    rechenergebnis = Number(wertA) * Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    wertA = rechenergebnis;
    wertB = true;
    rechenart = "mal";
    console.log(rechenergebnis);
  } else {
    wertB = true;
    rechenart = "mal";
    console.log("WertA gespeichert:", wertA);
  }
}

function berechnungDurch() {
  if (wertA !== false && wertB !== false) {
    rechenergebnis = Number(wertA) / Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    wertA = rechenergebnis;
    wertB = true;
    rechenart = "durch";
    console.log(rechenergebnis);
  } else {
    wertB = true;
    rechenart = "durch";
    console.log("WertA gespeichert:", wertA);
  }
}

function istgleich() {
  if (wertB === true) {
    return;
  }
  if (rechenart === "plus" && wertB !== true) {
    rechenergebnis = Number(wertA) + Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    console.log(rechenergebnis);
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "minus" && wertB !== true) {
    rechenergebnis = Number(wertA) - Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    console.log(rechenergebnis);
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "mal") {
    rechenergebnis = Number(wertA) * Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "durch") {
    rechenergebnis = Number(wertA) / Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    wertA = rechenergebnis;
    wertB = true;
  }
}

function reset() {
  wertA = false;
  wertB = false;
  rechenergebnis = 0;
  document.getElementById("ergebnis").innerHTML = rechenergebnis;
}
