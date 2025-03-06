let input = prompt("Mời bạn nhập vào dãy số bất kỳ: ");
let array = input.split('').map(Number);

console.log("Mảng ban đầu: " + array);

let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("Phần tử có giá trị lớn nhất trong mảng là: " + max);