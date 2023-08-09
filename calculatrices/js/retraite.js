document.addEventListener("DOMContentLoaded", function () {
  const calculateRetirementButton = document.getElementById("calculate-retirement-btn");
  const retirementSavings = document.getElementById("retirement-savings");

  calculateRetirementButton.addEventListener("click", () => {
    const currentAge = parseInt(document.getElementById("current-age").value);
    const retirementAge = parseInt(document.getElementById("retirement-age").value);
    const monthlySavings = parseFloat(document.getElementById("monthly-savings").value);

    if (!isNaN(currentAge) && !isNaN(retirementAge) && !isNaN(monthlySavings)) {
      const yearsToRetirement = retirementAge - currentAge;
      const totalSavings = monthlySavings * 12 * yearsToRetirement;
      retirementSavings.textContent = totalSavings.toFixed(2) + " €";
    } else {
      retirementSavings.textContent = "Veuillez entrer des valeurs valides.";
    }
  });
});
