let arr = [];
console.log("1 Nhap mang");
console.log("2 Hien thi mang");
console.log("3 Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
console.log("4 Tính tổng các phần tử trong mảng");
console.log("5 Tìm số lần xuất hiện của một phần tử trong mảng");
console.log("6 Sắp xếp mảng tăng dần");
console.log("7 Thoat chuong trinh");

let choice = (prompt("Mời bạn chọn một chức năng 1-7: "));

if (choice === 1) {
    let n = (prompt("Mời bạn nhập vào số phần tử của mảng: "));
    arr = [];
    for (let i = 0; i < n; i++) {
        let element = (prompt("Nhập phần tử thứ " + (i + 1) + ": "));
        arr.push(element);
    }
    console.log("Mảng đã nhập: " + arr);
}
