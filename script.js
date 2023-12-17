let outputContainer = document.getElementById("output_container");
let currentInput = "";

function clearOutput() {
  currentInput = "";
  console.log("current input", currentInput);
  updateOutput();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  console.log("current input", currentInput);

  updateOutput();
}

function appendNumber(number) {
  currentInput += number;
  console.log("current input", currentInput);

  updateOutput();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    console.log("current input", currentInput);

    updateOutput();
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    console.log("current input", currentInput);

    updateOutput();
  } catch (error) {
    // currentInput = alert("Offoo!! Please enter valid input");
    currentInput = "Error! Invalid Input";

    console.log("current input", currentInput);

    updateOutput();
  }
}

function updateOutput() {
  outputContainer.textContent = currentInput;
}
