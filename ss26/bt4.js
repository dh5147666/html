function kiemTraSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function locSoNguyenTo(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (kiemTraSoNguyenTo(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let ketQua = locSoNguyenTo(mangSo);
console.log("Các số nguyên tố trong mảng là: " + ketQua);