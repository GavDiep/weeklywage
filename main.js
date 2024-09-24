// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById("dm-hours").value;
  let dmPayrate = +document.getElementById("dm-payrate").value;
  let soHours = +document.getElementById("so-hours").value;
  let soPayrate = +document.getElementById("so-payrate").value;
  let kyHours = +document.getElementById("ky-hours").value;
  let kyPayrate = +document.getElementById("ky-payrate").value;

  // Calculate & Output Pay
  // Darcy Maddox
  document.getElementById(`dm-wage`).innerHTML = calculateWage(
    dmHours,
    dmPayrate
  );

  // Sofie Orenstein
  document.getElementById(`so-wage`).innerHTML = calculateWage(
    soHours,
    soPayrate
  );

  // Karl Yoon
  document.getElementById(`ky-wage`).innerHTML = calculateWage(
    kyHours,
    kyPayrate
  );
}
// Functions

function calculateWage(hours, payrate) {
  let overtime = 0;
  if (hours > 40) {
    overtime = hours - overtime;
    hours = 40;
  }
  let pay = hours * payrate + overtime * 1.5 * payrate;
  return pay.toFixed(2);
}
