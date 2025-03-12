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

function hienThiSoLonHonHoacBang10(array) {
    if (array === null) {
        return;
    }
    console.log("Các số nguyên lớn hơn hoặc bằng 10 trong mảng là:");
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            console.log(array[i]);
        }
    }
}

let mang = nhapMangSoNguyen(10);
hienThiSoLonHonHoacBang10(mang);