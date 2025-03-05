let number = parseInt(prompt("Mời bạn nhập vào một số nguyên bất kỳ: "));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else if (number <= 3) {
    isPrime = true;
} else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
} else {
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " là số nguyên tố.");
} else {
    console.log(number + " không phải là số nguyên tố.");
}