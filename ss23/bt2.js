let array = [5, 12, 8, 20, 15, 3, 10, 7, 25, 18];
let max = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
    }
}

console.log("Phần tử có giá trị lớn nhất trong mảng là: " + max);
console.log("Vị trí của phần tử đó trong mảng là: " + maxIndex);