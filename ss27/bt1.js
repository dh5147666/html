let choice;
do {
    let menu = "Menu:\n";
    menu += "1. Cộng hai số\n";
    menu += "2. Trừ hai số\n";
    menu += "3. Nhân hai số\n";
    menu += "4. Chia hai số\n";
    menu += "5. Thoát\n";
    menu += "Mời bạn chọn một chức năng 1-5: ";
    choice = parseInt(prompt(menu));

    if (choice >= 1 && choice <= 4) {
        let so1 = parseFloat(prompt("Nhập số thứ nhất: "));
        let so2 = parseFloat(prompt("Nhập số thứ hai: "));

        let ketQua;
        switch (choice) {
            case 1:
                ketQua = congHaiSo(so1, so2);
                break;
            case 2:
                ketQua = truHaiSo(so1, so2);
                break;
            case 3:
                ketQua = nhanHaiSo(so1, so2);
                break;
            case 4:
                ketQua = chiaHaiSo(so1, so2);
                break;
        }
        alert("Kết quả: " + ketQua);
    } else if (choice !== 5) {
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 5);

alert("Thoát chương trình.");

function congHaiSo(a, b) {
    return a + b;
}

function truHaiSo(a, b) {
    return a - b;
}

function nhanHaiSo(a, b) {
    return a * b;
}

function chiaHaiSo(a, b) {
    if (b === 0) {
        return "Phép chia cho 0 không hợp lệ.";
    }
    return a / b;
}