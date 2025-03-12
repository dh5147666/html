// Hàm nhập mảng số nguyên
function nhapMangSoNguyen(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập phần tử thứ " + (i + 1) + ": ");
        let number = parseInt(input);

        if (isNaN(number)) {
            console.log("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên.");
            return null;
        } else {
            array.push(number);
        }
    }
    return array;
}

// Hàm tìm số lớn nhất và vị trí của nó
function timSoLonNhatVaViTri(array) {
    if (array === null) {
        return;
    }
    let max = Math.max(...array);
    let index = array.indexOf(max);
    console.log("Số lớn nhất trong mảng là: " + max);
    console.log("Vị trí của số lớn nhất trong mảng là: " + index);
}

// Nhập mảng và tìm số lớn nhất
let mang = nhapMangSoNguyen(10);
timSoLonNhatVaViTri(mang);