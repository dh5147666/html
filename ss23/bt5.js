let n = parseInt(prompt("Mời bạn nhập vào số phần tử của mảng: "));
let array = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    let element = prompt("Nhập phần tử thứ " + (i + 1) + ": ");
    array.push(element);
}

for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i].trim() !== '') {
        sum += parseFloat(array[i]);
    }
}

console.log("Tổng các ký tự là số trong mảng là: " + sum);