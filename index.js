const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");
const themeToggle = document.getElementById("themeToggle");

btnEl.addEventListener("click", calculateBMI);
themeToggle.addEventListener("click", toggleTheme);

function calculateBMI() {
    const age = Number(document.getElementById("age").value);
    const feet = Number(document.getElementById("feet").value);
    const inches = Number(document.getElementById("inches").value);
    const weight = Number(document.getElementById("weight").value);

   if (!age || !weight || feet < 0 || inches < 0) {
        alert("Please fill all fields correctly");
        return;
    }

    if (age < 18) {
        weightConditionEl.innerText = "BMI for adults only (18+)";
        weightConditionEl.style.color = "orange";
        bmiInputEl.value = "";
        return;
    }

    const totalInches = feet * 12 + inches;
    const heightMeters = totalInches * 0.0254;

    const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
    bmiInputEl.value = bmi;

    if (bmi < 18.5) {
        setStatus("Underweight", "red");
    } else if (bmi < 25) {
        setStatus("Normal weight", "green");
    } else if (bmi < 30) {
        setStatus("Overweight", "orange");
    } else {
        setStatus("Obesity", "red");
    }
}

function setStatus(text, color) {
    weightConditionEl.innerText = text;
    weightConditionEl.style.color = color;
    weightConditionEl.style.fontWeight = "bold";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}
