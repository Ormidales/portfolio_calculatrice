document.addEventListener("DOMContentLoaded", function () {
  const calculateEnergyButton = document.getElementById("calculate-energy-btn");
  const energyResult = document.getElementById("energy-result");

  calculateEnergyButton.addEventListener("click", () => {
    const powerInput = parseFloat(document.getElementById("power-input").value);
    const timeInput = parseFloat(document.getElementById("time-input").value);

    if (!isNaN(powerInput) && !isNaN(timeInput)) {
      const energyConsumption = (powerInput * timeInput).toFixed(2);
      energyResult.textContent = energyConsumption;
    } else {
      energyResult.textContent = "Veuillez entrer des valeurs valides.";
    }
  });
});
