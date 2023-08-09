// Variables
let currentInput = "";
let previousInput = "";
let currentOperator = "";

// Éléments DOM
const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".num-btn");
const opButtons = document.querySelectorAll(".op-btn");
const calculateButton = document.getElementById("calculate-btn");
const clearButton = document.getElementById("clear-btn");
const historyContainer = document.querySelector(".history");
const historyList = document.getElementById("history-list");
const tempButton = document.getElementById("temp-btn");
const tempCelsiusButton = document.getElementById("temp-celsius-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

themeToggleBtn.addEventListener("click", () => {
  toggleTheme();
});

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Ajoutez les écouteurs d'événements aux boutons numériques
numButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    updateDisplay();
  });
});

// Ajoutez les écouteurs d'événements aux boutons d'opérations
opButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput !== "") {
      previousInput = currentInput;
      currentInput = "";
      currentOperator = button.textContent;
      updateDisplay();
    }
  });
});

// Écouteur d'événement pour le bouton C (effacer)
clearButton.addEventListener("click", () => {
  clearDisplay();
});

// Écouteur d'événement pour le bouton =
calculateButton.addEventListener("click", () => {
  performCalculation();
});

// Écouteur d'événement pour le bouton Temp (conversion de température)
tempButton.addEventListener("click", () => {
  if (currentInput !== "") {
    const inputValue = parseFloat(currentInput);
    if (!isNaN(inputValue)) {
      const convertedTemp = convertTemperature(inputValue);
      currentInput = convertedTemp.toString();
      updateDisplay();
    } else {
      alert("Veuillez entrer une valeur numérique avant de cliquer sur le bouton Temp.");
    }
  } else {
    alert("Veuillez entrer une valeur avant de cliquer sur le bouton Temp.");
  }
});

tempCelsiusButton.addEventListener("click", () => {
  if (currentInput !== "") {
    const convertedTemp = convertTemperatureToCelsius(parseFloat(currentInput));
    currentInput = convertedTemp.toString();
    updateDisplay();
  }
});

function convertTemperatureToCelsius(value) {
  // Convertir de Fahrenheit à Celsius
  // Température (C) = (Température (F) - 32) × 5/9
  return ((value - 32) * 5/9).toFixed(2);
}

// Efface l'affichage
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperator = "";
  updateDisplay();
}

// Effectue le calcul
function performCalculation() {
  if (currentInput !== "" && previousInput !== "") {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;
    switch (currentOperator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    // Ajoute le calcul à l'historique avec la date d'arrivée
    const now = new Date();
    const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const historyItem = document.createElement("li");
    historyItem.innerHTML = `
            <div>${num1} ${currentOperator} ${num2} = ${result}</div>
            <div class="timestamp">${formattedTime}</div>
        `;
    historyList.appendChild(historyItem);

    currentInput = result.toString();
    previousInput = "";
    currentOperator = "";
    updateDisplay();

    // Affiche l'historique s'il y a au moins un calcul enregistré
    historyContainer.style.display = "block";
  }
}

// Met à jour l'affichage
function updateDisplay() {
  display.value = currentInput;
}

// Convertir de Celsius à Fahrenheit
function convertTemperature(value) {
  // Température (F) = Température (C) × 9/5 + 32
  return (value * 9/5 + 32).toFixed(2);
}
