function addition() {
  const n1 = parseFloat(document.getElementById("first-number").value);
  const n2 = parseFloat(document.getElementById("second-number").value);
  const res = n1 + n2;
  displayResult(res);
}

function subtraction() {
  const n1 = parseFloat(document.getElementById("first-number").value);
  const n2 = parseFloat(document.getElementById("second-number").value);
  const res = n1 - n2;
  displayResult(res);
}

function multiplication() {
  const n1 = parseFloat(document.getElementById("first-number").value);
  const n2 = parseFloat(document.getElementById("second-number").value);
  const res = n1 * n2;
  displayResult(res);
}

function division() {
  const n1 = parseFloat(document.getElementById("first-number").value);
  const n2 = parseFloat(document.getElementById("second-number").value);

  if (n2 === 0) {
    document.getElementById("output").innerHTML = "Cannot divide by zero";
    document.getElementById("output").className = "";
    return;
  }

  const res = n1 / n2;
  displayResult(res);
}

function power() {
  const base = parseFloat(document.getElementById("first-number").value);
  const exponent = parseFloat(document.getElementById("second-number").value);
  let res = 1;

  for (let i = 0; i < Math.abs(exponent); i++) {
    res *= base;
  }

  if (exponent < 0) {
    res = 1 / res;
  }

  if (exponent === 0) {
    res = 1;
  }

  displayResult(res);
}

function clearAll() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
}

function displayResult(res) {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = String(res);
  if (res < 0) {
    outputElement.className = "negative";
  } else {
    outputElement.className = "";
  }
}
