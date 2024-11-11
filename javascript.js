var rechenergebnis = 0;
var wertA = false;
var wertB = false;
// function addition() {
//     if{wertA=false}
//     wertA= document.getElementById(tasteWert).value
//   rechenergebnis = wertA + wertB;
// }

function pressTaste(x) {
  //console.log(typeof wertA, wertA, typeof wertB, wertB);
  if (wertB == false) {
    addNumberA(x);
  } else {
    addNumberB(x);
  }
}

function addNumberA(x) {
  if (wertA == false) {
    wertA = x;
    document.getElementById("ergebnis").innerHTML = wertA;
    console.log("wertA = " + wertA);
  } else {
    wertA = wertA + String(x);
    document.getElementById("ergebnis").innerHTML = wertA;
    console.log("wertA = " + wertA);
  }
}

function addNumberB(x) {
  if (wertB !== false) {
    wertB = x;
    console.log("wertB = " + wertB);
    document.getElementById("ergebnis").innerHTML = wertB;
  } else {
    wertB = wertB + String(x);
    console.log("wertB = " + wertB);
    document.getElementById("ergebnis").innerHTML = wertB;
  }
}

function berechnung(y) {
  if (wertA !== false && wertB !== false) {
    rechenergebnis = Number(wertA) + Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    console.log(rechenergebnis);
    wertA = rechenergebnis;
    wertB = true;
  } else {
    wertB = true;
    console.log("WertA gespeichert:", wertA);
  }
}
