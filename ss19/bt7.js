let a = Number(prompt("Mời bạn nhập vào giá trị cuả số 1"));
let b = Number(prompt("Mời bạn nhập vào giá trị cuả số 2"));
let c = Number(prompt("Mời bạn nhập vào giá trị cuả số 3"));
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert(`Số lớn nhất trong 3 số là ${max}`);