let array = [1, 2, 3, 4, 5];
let sumOdd = 0;
let sumEven = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sumEven += array[i];
    } else {
        sumOdd += array[i];
    }
}

console.log("Tổng các số lẻ là: " + sumOdd);
console.log("Tổng các số chẵn là: " + sumEven);