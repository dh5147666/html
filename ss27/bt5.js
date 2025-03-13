function Mangcon(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        let subArray = array.slice(i, i + n);
        result.push(subArray);
    }
    return result;
}

let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let kichThuocMangCon = 3;
let ketQua = MangCon(mang, kichThuocMangCon);
console.log("Các mảng con là: ", ketQua);