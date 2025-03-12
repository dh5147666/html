function locEmailHopLe(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('@') && !array[i].includes(' ')) {
            result.push(array[i]);
        }
    }
    return result;
}


let danhSachEmail = ["example@example.com", "invalid email@example.com", "user@domain.com", "user@domain", "user@ domain.com"];
let ketQua = locEmailHopLe(danhSachEmail);
console.log("Các email hợp lệ là: " + ketQua);