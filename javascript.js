var rechenergebnis = 0;
var wertA = false;
var wertB = false;
var rechenart = false;
var logfileEntry = 0;

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
  } else if (wertA !== false && wertB !== false && rechenart === "+") {
    istgleich();
  } else if (wertA !== false && wertB !== false && rechenart !== "+") {
    istgleich();
    rechenart = "+";
  } else if (wertA === false) {
    return;
  } else {
    wertB = true;
    rechenart = "+";
    console.log("WertA gespeichert:", wertA);
  }
}

function berechnungMinus() {
  if (wertB === true) {
    return;
  } else if (wertA !== false && wertB !== false && rechenart === "-") {
    istgleich();
  } else if (wertA !== false && wertB !== false && rechenart !== "-") {
    istgleich();
    rechenart = "-";
  } else if (wertA === false) {
    return;
  } else {
    wertB = true;
    rechenart = "-";
    console.log("WertA gespeichert:", wertA);
  }
}

function berechnungMal() {
  if (wertA !== false && wertB !== false && rechenart === "*") {
    istgleich();
  } else if (wertA !== false && wertB !== false && rechenart !== "*") {
    istgleich();
    rechenart = "*";
  } else if (wertA === false) {
    return;
  } else {
    wertB = true;
    rechenart = "*";
    console.log("WertA gespeichert:", wertA);
  }
}

function berechnungDurch() {
  if (wertA !== false && wertB !== false && rechenart === "/") {
    istgleich();
  } else if (wertA !== false && wertB !== false && rechenart !== "/") {
    istgleich();
    rechenart = "/";
  } else if (wertA === false) {
    return;
  } else {
    wertB = true;
    rechenart = "/";
    console.log("WertA gespeichert:", wertA);
  }
}

function istgleich() {
  if (wertB === true) {
    return;
  }
  if (rechenart === "+" && wertB !== true) {
    rechenergebnis = Number(wertA) + Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    updateEntry();
    console.log(rechenergebnis);
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "-" && wertB !== true) {
    rechenergebnis = Number(wertA) - Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    updateEntry();
    console.log(rechenergebnis);
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "*") {
    rechenergebnis = Number(wertA) * Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    updateEntry();
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "/") {
    rechenergebnis = Number(wertA) / Number(wertB);
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    updateEntry();
    wertA = rechenergebnis;
    wertB = true;
  }
}

function reset() {
  wertA = false;
  wertB = false;
  rechenergebnis = 0;
  document.getElementById("ergebnis").innerHTML = rechenergebnis;
  document.getElementById("logfile").innerHTML = "";
}

function updateEntry() {
  if (logfileEntry == 0) {
    var newLogfileEntry = 0;
    newLogfileEntry = [
      "<p>" + wertA + rechenart + wertB + " = " + rechenergebnis + "</p>",
    ];
    logfileEntry = newLogfileEntry;
    document.getElementById("logfile").innerHTML = logfileEntry;
  } else {
    newLogfileEntry =
      "<p>" + wertA + rechenart + wertB + " = " + rechenergebnis + "</p>";
    logfileEntry = newLogfileEntry + logfileEntry;
    document.getElementById("logfile").innerHTML = logfileEntry;
  }
}
