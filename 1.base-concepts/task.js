"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b,2)-4*a*c;
  let arr = [];
  if (d===0) {
    arr.push(-b / (2 * a))
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a))
    arr.push((-b - Math.sqrt(d) )/(2*a))
  }
  return arr;
}
solveEquation ()

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let loanBody = amount - contribution;
  let correctPercent = percent / 100 / 12;
  let payment = loanBody * (correctPercent + (correctPercent / (((1 + correctPercent) ** countMonths) - 1)));
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2)
}