let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];
let number = parseInt(prompt("Mời bạn nhập vào một số nguyên bất kỳ: "));
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
        count++;
    }
}

console.log("Số lần xuất hiện của số " + number + " trong mảng là: " + count);