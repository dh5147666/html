
let usdAmount = parseFloat(prompt("Nhập số tiền (USD) cần đổi:"));


const exchangeRate = 25000;


let vndAmount = usdAmount * exchangeRate;


alert(usdAmount + " USD tương đương với " + vndAmount.toLocaleString() + " VND.");

document.write("<h2>" + usdAmount + " USD tương đương với " + vndAmount.toLocaleString() + " VND.</h2>");   