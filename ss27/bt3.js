let choice;
do {
    let menu = "Menu:\n";
    menu += "1. Tính diện tích hình tròn\n";
    menu += "2. Tính chu vi hình tròn\n";
    menu += "3. Tính diện tích hình chữ nhật\n";
    menu += "4. Tính chu vi hình chữ nhật\n";
    menu += "5. Thoát\n";
    menu += "Mời bạn chọn một chức năng 1-5: ";
    choice = parseInt(prompt(menu));

    let ketQua;
    switch (choice) {
        case 1:
            let banKinh = parseFloat(prompt("Nhập bán kính hình tròn: "));
            ketQua = tinhDienTichHinhTron(banKinh);
            alert("Diện tích hình tròn là: " + ketQua);
            break;
        case 2:
            banKinh = parseFloat(prompt("Nhập bán kính hình tròn: "));
            ketQua = tinhChuViHinhTron(banKinh);
            alert("Chu vi hình tròn là: " + ketQua);
            break;
        case 3:
            let chieuDai = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
            let chieuRong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
            ketQua = tinhDienTichHinhChuNhat(chieuDai, chieuRong);
            alert("Diện tích hình chữ nhật là: " + ketQua);
            break;
        case 4:
            chieuDai = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
            chieuRong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
            ketQua = tinhChuViHinhChuNhat(chieuDai, chieuRong);
            alert("Chu vi hình chữ nhật là: " + ketQua);
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 5);

function tinhDienTichHinhTron(r) {
    return Math.PI * r * r;
}

function tinhChuViHinhTron(r) {
    return 2 * Math.PI * r;
}

function tinhDienTichHinhChuNhat(dai, rong) {
    return dai * rong;
}

function tinhChuViHinhChuNhat(dai, rong) {
    return 2 * (dai + rong);
}