const income = document.querySelector(".income-input1");
const extra_income = document.querySelector(".income-input2");
const age = document.querySelector(".income-input3");
const deductions = document.querySelector(".income-input4");
const results = document.querySelector(".results-input");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const form = document.querySelector("form");

//Reset page
reset.addEventListener("click", () => {
  setTimeout(() => {
    document.location.reload();
  });
});

//Calculate button
calculate.addEventListener("click", (e) => {
  e.preventDefault;

  const total_income=parseInt(income.value)+parseInt(extra_income.value)-deductions.value
  console.log("total income is",total_income)
  console.log("extra income",extra_income.value)
  console.log("deduction",deductions.value)
  console.log("age is",age.value)
  const tax_amount=total_income-800000


  if (total_income <= 800000) {
    results.value = 0;
  } else if (total_income > 800000 && age.value < 40) {
    results.value = tax_amount* 0.3;
  } else if (total_income > 800000 && age.value < 60) {
    results.value =tax_amount* 0.4;
  } else if (total_income > 800000 && age.value >=60) {
    results.value = tax_amount * 0.1;
  } 
  numRounded();
});

//Round results

const numRounded = () => {
  (Math.round(results.value * 100) / 100).toFixed(2);
};
//Tax function
