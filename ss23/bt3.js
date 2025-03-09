let n = parseInt(prompt("Mời bạn nhập vào số phần tử của mảng: "));
let array = [];

for (let i = 0; i < n; i++) {
    let element = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    array.push(element);
}

let negativeCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeCount++;
    }
}

console.log("Số lượng các số nguyên âm trong mảng là: " + negativeCount);