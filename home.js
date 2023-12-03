var total=0
var result=document.getElementById('result')

function Depositamont(){
  const depositAmount = {
  amount: parseFloat(depoam.value),
  pass : deppassw.value
}

if(depositAmount.amount <=0 || isNaN(depositAmount.amount)){
  alert("Please enter a valid amount")
  return;
}
localStorage.setItem(depositAmount.pass, JSON.stringify(depositAmount))
 total += depositAmount.amount;
alert("Amount deposited");
displayBalance();
}


function amountWithdraw(){
  const withdrawAmount = {
    amount: parseFloat(amt2.value),
    pass : psd2.value
  }
  if(withdrawAmount.amount <= 0 || isNaN(withdrawAmount.amount)){
    alert("Please enter a valid amount")
    return;
}

if(withdrawAmount.amount > total){
  alert("Insufficient balance");
}else{
  localStorage.setItem(withdrawAmount.pass , JSON.stringify(withdrawAmount))
  total -= withdrawAmount.amount
  alert("Amount withdrawn");
  //  displayBalance(); 
   result1.innerHTML =`Account balance : ${total}`
}

}

function displayBalance(){
  result.innerHTML =`Account balance : ${total}`
}

function logout(){
  window.location="index.html"
}