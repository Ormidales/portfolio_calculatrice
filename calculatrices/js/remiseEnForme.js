document.addEventListener("DOMContentLoaded", function () {
  const calculateFitnessButton = document.getElementById("calculate-fitness-btn");
  const calorieNeeds = document.getElementById("calorie-needs");

  calculateFitnessButton.addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to m
    const age = parseInt(document.getElementById("age").value);
    const activityLevel = document.getElementById("activity-level").value;

    if (!isNaN(weight) && !isNaN(height) && !isNaN(age)) {
      let bmr;

      if (activityLevel === "sedentary") {
        bmr = 66 + (13.75 * weight) + (5.003 * height * 100) - (6.75 * age);
      } else if (activityLevel === "lightly-active") {
        bmr = 66 + (13.75 * weight) + (5.003 * height * 100) - (6.75 * age) * 1.375;
      } else if (activityLevel === "moderately-active") {
        bmr = 66 + (13.75 * weight) + (5.003 * height * 100) - (6.75 * age) * 1.55;
      } else if (activityLevel === "very-active") {
        bmr = 66 + (13.75 * weight) + (5.003 * height * 100) - (6.75 * age) * 1.725;
      }

      const calorieIntake = bmr * 1.2; // Assuming a balanced diet
      calorieNeeds.textContent = Math.round(calorieIntake) + " calories";
    } else {
      calorieNeeds.textContent = "Veuillez entrer des valeurs valides.";
    }
  });
});
