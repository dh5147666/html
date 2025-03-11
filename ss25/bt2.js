function tinhTong(a, b) {
    return a + b;
}
let so1 = parseInt(prompt("Nhập số nguyên thứ nhất: "));
let so2 = parseInt(prompt("Nhập số nguyên thứ hai: "));
let tong = tinhTong(so1, so2);
console.log("Tổng của " + so1 + " và " + so2 + " là: " + tong);