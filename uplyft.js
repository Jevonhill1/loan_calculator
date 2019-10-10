/*function showPayment(
  
)
function calculateMonthlyPayment( loanAmount,)

//variables
const startDate = day + month + year

const installmentAmount = numberOfYears * 12
const simpleInterestRate
const monthlyInstallment = annualRate / 12 / 100
console.log()
const
// Please note payments are not collected on weekends or public holidays.


payment = interest amount per period * principal amount / 1-(1 + interest amt per period)* negative number of payments 
p = i*A/(1-(1+i)^-n)
//i = rate per period
//A= present value
//n = number of periods
*/


const button = document.querySelector('#button')
//event listeners
button.addEventListener('click', computeLoan)

//input variables & query the DOM

function computeLoan() {
  let amount = Number(document.getElementById('amount').value)
  let interest_rate = Number(document.getElementById('interest_rate').value / 100)
  let interest_payment = Number(amount * interest_rate)
  let totalPayment = Number(amount + interest_payment)
  const interval = document.getElementById('interval').value
  let months = document.getElementById('months').value;
  const interest = (amount * (interest_rate * .01)) / months
  let payment = ((amount / months) + interest).toFixed(2)
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/")
  document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;

  console.log("totalPayment", totalPayment)
  console.log("Monthly", totalPayment / 12)
  console.log("Weekly", totalPayment / 52)
  console.log("Daily", totalPayment / 365)

}


//output
let paymentDue
let payoffDate

//import bizniz from 'bizniz'
//const newDate = bizniz.addWeekDays(day, 20)
//functions


//