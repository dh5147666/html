function locChuoiDaiHon5KyTu(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            result.push(array[i]);
        }
    }
    return result;
}


let mangChuoi = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
let ketQua = locChuoiDaiHon5KyTu(mangChuoi);
console.log("Các chuỗi có độ dài lớn hơn 5 ký tự là: " + ketQua);