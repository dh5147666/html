let n = parseInt(prompt("Mời bạn nhập vào số phần tử của mảng: "));
let array = [];

for (let i = 0; i < n; i++) {
    let element = prompt("Nhập phần tử thứ " + (i + 1) + ": ");
    array.push(element);
}

let digitCount = 0;

for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i].trim() !== '') {
        digitCount++;
    }
}

console.log("Số lượng các ký tự số trong mảng là: " + digitCount);