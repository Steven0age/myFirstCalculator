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
  } else {
    wertA = wertA + String(x);
    document.getElementById("ergebnis").innerHTML = wertA;
  }
}

function addNumberB(x) {
  if (wertB === true) {
    wertB = x;
    document.getElementById("ergebnis").innerHTML = wertB;
  } else {
    wertB = wertB + String(x);
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
  }
}

function istgleich() {
  if (wertB === true) {
    return;
  }
  if (rechenart === "+" && wertB !== true) {
    rechenergebnis = Number(wertA) + Number(wertB);
    updateEntry();
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "-" && wertB !== true) {
    rechenergebnis = Number(wertA) - Number(wertB);
    updateEntry();
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "*") {
    rechenergebnis = Number(wertA) * Number(wertB);
    updateEntry();
    wertA = rechenergebnis;
    wertB = true;
  }
  if (rechenart === "/") {
    rechenergebnis = Number(wertA) / Number(wertB);
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
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    var newLogfileEntry = 0;
    newLogfileEntry = [
      "<p>" + wertA + rechenart + wertB + " = " + rechenergebnis + "</p>",
    ];
    logfileEntry = newLogfileEntry;
    document.getElementById("logfile").innerHTML = logfileEntry;
  } else {
    document.getElementById("ergebnis").innerHTML = rechenergebnis;
    newLogfileEntry =
      "<p>" + wertA + rechenart + wertB + " = " + rechenergebnis + "</p>";
    logfileEntry = newLogfileEntry + logfileEntry;
    document.getElementById("logfile").innerHTML = logfileEntry;
  }
}
