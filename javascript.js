let operationResult = 0;
let valueA = false;
let valueB = false;
let operation = false;
let logfileEntry = "";

function pressKey(x) {
  if (valueB === false) {
    addNumberA(x);
  } else {
    addNumberB(x);
  }
}

function addNumberA(x) {
  if (valueA === false) {
    valueA = x;
  } else {
    valueA = valueA + String(x);
  }
  document.getElementById("result").innerHTML = valueA;
}

function addNumberB(x) {
  if (valueB === true) {
    valueB = x;
  } else {
    valueB = valueB + String(x);
  }
  document.getElementById("result").innerHTML = valueB;
}

function operationPlus() {
  if (valueA !== false && valueB !== false && operation === "+") {
    operationEquals();
  } else if (valueA !== false && valueB !== false && operation !== "+") {
    operationEquals();
    operation = "+";
  } else if (valueA === false) {
    operation = "+";
  } else {
    valueB = true;
    operation = "+";
  }
}

function operationMinus() {
  if (valueA !== false && valueB !== false && operation === "-") {
    operationEquals();
  } else if (valueA !== false && valueB !== false && operation !== "-") {
    operationEquals();
    operation = "-";
  } else if (valueA === false) {
    operation = "-";
  } else {
    valueB = true;
    operation = "-";
  }
}

function operationMultiply() {
  if (valueA !== false && valueB !== false && operation === "*") {
    operationEquals();
  } else if (valueA !== false && valueB !== false && operation !== "*") {
    operationEquals();
    operation = "*";
  } else if (valueA === false) {
    operation = "*";
  } else {
    valueB = true;
    operation = "*";
  }
}

function operationDivide() {
  if (valueA !== false && valueB !== false && operation === "/") {
    operationEquals();
  } else if (valueA !== false && valueB !== false && operation !== "/") {
    operationEquals();
    operation = "/";
  } else if (valueA === false) {
    operation = "/";
  } else {
    valueB = true;
    operation = "/";
  }
}

function operationEquals() {
  if (valueB === true || valueB === false) {
    return;
  }
  if (operation === "+") {
    operationResult = Number(valueA) + Number(valueB);
  }
  if (operation === "-") {
    operationResult = Number(valueA) - Number(valueB);
  }
  if (operation === "*") {
    operationResult = Number(valueA) * Number(valueB);
  }
  if (operation === "/") {
    operationResult = Number(valueA) / Number(valueB);
  }
  document.getElementById("result").innerHTML = operationResult;
  updateLogfile();
  valueA = operationResult;
  valueB = true;
}
function updateLogfile() {
  let newLogfileEntry =
    "<p>" + valueA + operation + valueB + " = " + operationResult + "</p>";
  logfileEntry = newLogfileEntry + logfileEntry;
  document.getElementById("logfile").innerHTML = logfileEntry;
}

function reset() {
  valueA = false;
  valueB = false;
  operationResult = 0;
  logfileEntry = "";
  document.getElementById("result").innerHTML = operationResult;
  document.getElementById("logfile").innerHTML = "";
}
