let displayValue = "";
let memory = 0;
let operator = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  let result = eval(displayValue);
  document.getElementById("display").value = result;
  displayValue = result;
}

function storeMemory() {
  memory = parseFloat(displayValue);
  clearDisplay();
}

function recallMemory() {
  displayValue = memory.toString();
  document.getElementById("display").value = displayValue;
}

function clearMemory() {
  memory = 0;
}
