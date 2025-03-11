function demSoNguyenDuong(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] > 0 && Number.isInteger(array[i])) {
            count++;
        }
    }
    return count;
}

let mang = [1, -2, 3.5, 4, '5', 6, -7, 8, 9, 10];
let soLuongSoNguyenDuong = demSoNguyenDuong(mang);
console.log("Số lượng các số nguyên dương trong mảng là: " + soLuongSoNguyenDuong);