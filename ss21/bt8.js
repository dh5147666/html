console.log("Các số Armstrong có 3 chữ số là:");

for (let number = 100; number <= 999; number++) {
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number % 100) / 10);
    let units = number % 10;

    let sumOfCubes = Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3);

    if (sumOfCubes === number) {
        console.log(number);
    }
}