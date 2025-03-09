let array = [5, 12, 8, 20, 15, 3, 10, 7, 25, 18]; // Mảng số nguyên gồm 10 phần tử

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        count++;
    }
}

console.log("Số lượng các số nguyên lớn hơn hoặc bằng 10 là: " + count);