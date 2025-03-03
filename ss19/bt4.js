let num = Number(prompt("Mời bạn nhập vào số bất kì"));
if (num % 3 == 0 && num % 5 == 0) {
    alert(`Số ${num} bạn nhập chia hết cho cả 3 và 5`);
} else {
    alert(`Số ${num} bạn vừa nhập không chia hết cho cả 3 và 5`);
}