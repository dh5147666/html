let menu = {};

function themMonAn() {
    let danhMuc = prompt("Nhập tên danh mục:");
    if (!menu[danhMuc]) {
        menu[danhMuc] = [];
    }

    let tenMon = prompt("Nhập tên món ăn:");
    let gia = parseFloat(prompt("Nhập giá món ăn:"));
    let moTa = prompt("Nhập mô tả món ăn:");

    menu[danhMuc].push({ tenMon, gia, moTa });
    alert("Đã thêm món ăn thành công!");
}

function xoaMonAn() {
    let danhMuc = prompt("Nhập tên danh mục chứa món ăn cần xóa:");
    if (!menu[danhMuc]) {
        alert("Danh mục không tồn tại.");
        return;
    }

    let tenMon = prompt("Nhập tên món ăn cần xóa:");
    let index = menu[danhMuc].findIndex(mon => mon.tenMon === tenMon);

    if (index !== -1) {
        menu[danhMuc].splice(index, 1);
        alert("Đã xóa món ăn thành công!");
    } else {
        alert("Không tìm thấy món ăn trong danh mục.");
    }
}

function capNhatMonAn() {
    let danhMuc = prompt("Nhập tên danh mục chứa món ăn cần cập nhật:");
    if (!menu[danhMuc]) {
        alert("Danh mục không tồn tại.");
        return;
    }

    let tenMon = prompt("Nhập tên món ăn cần cập nhật:");
    let monAn = menu[danhMuc].find(mon => mon.tenMon === tenMon);

    if (monAn) {
        monAn.tenMon = prompt("Nhập tên mới của món ăn:", monAn.tenMon);
        monAn.gia = parseFloat(prompt("Nhập giá mới của món ăn:", monAn.gia));
        monAn.moTa = prompt("Nhập mô tả mới của món ăn:", monAn.moTa);
        alert("Đã cập nhật món ăn thành công!");
    } else {
        alert("Không tìm thấy món ăn trong danh mục.");
    }
}

function hienThiMenu() {
    if (Object.keys(menu).length === 0) {
        alert("Menu trống.");
        return;
    }

    let output = "Menu nhà hàng:\n";
    for (let danhMuc in menu) {
        output += "Danh mục: " + danhMuc + "\n";
        menu[danhMuc].forEach(mon => {
            output += "  - Tên món: " + mon.tenMon + "\n" +
                "    Giá: " + mon.gia + "\n" +
                "    Mô tả: " + mon.moTa + "\n";
        });
        output += "-------------------------\n";
    }
    alert(output);
}

function timKiemMonAn() {
    let tenMon = prompt("Nhập tên món ăn cần tìm:");
    let found = false;

    let output = "Kết quả tìm kiếm:\n";
    for (let danhMuc in menu) {
        menu[danhMuc].forEach(mon => {
            if (mon.tenMon.toLowerCase() === tenMon.toLowerCase()) {
                output += "Danh mục: " + danhMuc + "\n" +
                    "  - Tên món: " + mon.tenMon + "\n" +
                    "    Giá: " + mon.gia + "\n" +
                    "    Mô tả: " + mon.moTa + "\n";
                found = true;
            }
        });
    }

    if (found) {
        alert(output);
    } else {
        alert("Không tìm thấy món ăn trong menu.");
    }
}

function thoat() {
    alert("Đã thoát chương trình.");
}

function menuQuanLy() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu quản lý nhà hàng:\n" +
            "1. Thêm món ăn vào danh mục\n" +
            "2. Xóa món ăn theo tên khỏi danh mục\n" +
            "3. Cập nhật thông tin món ăn theo tên\n" +
            "4. Hiển thị toàn bộ menu\n" +
            "5. Tìm kiếm món ăn theo tên\n" +
            "6. Thoát\n" +
            "Mời bạn chọn một chức năng (1-6):"
        ));

        switch (choice) {
            case 1:
                themMonAn();
                break;
            case 2:
                xoaMonAn();
                break;
            case 3:
                capNhatMonAn();
                break;
            case 4:
                hienThiMenu();
                break;
            case 5:
                timKiemMonAn();
                break;
            case 6:
                thoat();
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 6);
}

menuQuanLy();