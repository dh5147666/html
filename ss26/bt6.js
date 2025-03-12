function locNgayHopLe(array) {
    let regex = /^\d{2}\/\d{2}\/\d{4}$/; // Biểu thức chính quy để kiểm tra định dạng DD/MM/YYYY
    return array.filter(item => regex.test(item));
}

// Yêu cầu người dùng nhập vào số phần tử của mảng
let n = parseInt(prompt("Mời bạn nhập vào số phần tử của mảng: "));
let mangChuoi = [];

// Nhập các phần tử vào mảng
for (let i = 0; i < n; i++) {
    let input = prompt("Nhập phần tử thứ " + (i + 1) + ": ");
    mangChuoi.push(input);
}

// Lọc các chuỗi ngày hợp lệ
let ketQua = locNgayHopLe(mangChuoi);
console.log("Các chuỗi ngày hợp lệ là: " + ketQua);