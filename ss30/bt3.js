let phones = [
    { id: 1, name: "iPhone 13", price: 25000000, quantity: 10, company: "Apple" },
    { id: 2, name: "Samsung Galaxy S22", price: 20000000, quantity: 15, company: "Samsung" },
    { id: 3, name: "Xiaomi Mi 11", price: 15000000, quantity: 20, company: "Xiaomi" },
    { id: 4, name: "iPhone 14", price: 30000000, quantity: 5, company: "Apple" }
];

let cart = [];

function hienThiDienThoaiTheoHang() {
    let company = prompt("Nhập tên hãng điện thoại cần xem:");
    let filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());

    if (filteredPhones.length === 0) {
        alert("Không có điện thoại nào của hãng này.");
        return;
    }

    let output = "Danh sách điện thoại của hãng " + company + ":\n";
    filteredPhones.forEach(phone => {
        output += "ID: " + phone.id + "\n" +
            "Tên: " + phone.name + "\n" +
            "Giá: " + phone.price + "\n" +
            "Số lượng: " + phone.quantity + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function themDienThoaiMoi() {
    let id = parseInt(prompt("Nhập ID điện thoại:"));
    let name = prompt("Nhập tên điện thoại:");
    let price = parseFloat(prompt("Nhập giá điện thoại:"));
    let quantity = parseInt(prompt("Nhập số lượng điện thoại:"));
    let company = prompt("Nhập hãng điện thoại:");

    phones.push({ id, name, price, quantity, company });
    alert("Đã thêm điện thoại mới thành công!");
}

function timKiemDienThoai() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let foundPhones = phones.filter(phone =>
        phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id.toString() === keyword
    );

    if (foundPhones.length === 0) {
        alert("Không tìm thấy điện thoại.");
        return;
    }

    let output = "Kết quả tìm kiếm:\n";
    foundPhones.forEach(phone => {
        output += "ID: " + phone.id + "\n" +
            "Tên: " + phone.name + "\n" +
            "Giá: " + phone.price + "\n" +
            "Số lượng: " + phone.quantity + "\n" +
            "Hãng: " + phone.company + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function muaDienThoai() {
    let id = parseInt(prompt("Nhập ID điện thoại cần mua:"));
    let phone = phones.find(phone => phone.id === id);

    if (!phone) {
        alert("Không tìm thấy điện thoại với ID này.");
        return;
    }

    let quantity = parseInt(prompt("Nhập số lượng cần mua:"));
    if (quantity > phone.quantity) {
        alert("Số lượng điện thoại trong cửa hàng không đủ.");
        return;
    }

    phone.quantity -= quantity;

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity });
    }

    alert("Mua điện thoại thành công!");
}

function thanhToanGioHang() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert("Tổng tiền thanh toán: " + total + " VND\nThanh toán thành công!");
    cart = [];
}

function sapXepDienThoaiTheoGia(tangDan = true) {
    phones.sort((a, b) => tangDan ? a.price - b.price : b.price - a.price);
    hienThiTatCaDienThoai();
}

function hienThiTatCaDienThoai() {
    if (phones.length === 0) {
        alert("Cửa hàng không có điện thoại.");
        return;
    }

    let output = "Danh sách tất cả điện thoại:\n";
    phones.forEach(phone => {
        output += "ID: " + phone.id + "\n" +
            "Tên: " + phone.name + "\n" +
            "Giá: " + phone.price + "\n" +
            "Số lượng: " + phone.quantity + "\n" +
            "Hãng: " + phone.company + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function hienThiTongTienKho() {
    let total = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    alert("Tổng số tiền của các điện thoại trong kho: " + total + " VND");
}

function hienThiTongSoLuongTheoHang() {
    let companyCounts = {};
    phones.forEach(phone => {
        if (!companyCounts[phone.company]) {
            companyCounts[phone.company] = 0;
        }
        companyCounts[phone.company] += phone.quantity;
    });

    let output = "Tổng số lượng điện thoại theo từng hãng:\n";
    for (let company in companyCounts) {
        output += company + ": " + companyCounts[company] + "\n";
    }
    alert(output);
}

function thoat() {
    alert("Đã thoát chương trình.");
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu quản lý cửa hàng điện thoại:\n" +
            "1. Hiển thị điện thoại theo hãng\n" +
            "2. Thêm điện thoại mới vào cửa hàng\n" +
            "3. Tìm kiếm điện thoại theo tên hoặc ID\n" +
            "4. Mua điện thoại\n" +
            "5. Thanh toán giỏ hàng\n" +
            "6. Sắp xếp điện thoại theo giá tăng dần\n" +
            "7. Sắp xếp điện thoại theo giá giảm dần\n" +
            "8. Hiển thị tổng số tiền của các điện thoại trong kho\n" +
            "9. Hiển thị tổng số lượng điện thoại theo từng hãng\n" +
            "10. Thoát\n" +
            "Mời bạn chọn một chức năng (1-10):"
        ));

        switch (choice) {
            case 1:
                hienThiDienThoaiTheoHang();
                break;
            case 2:
                themDienThoaiMoi();
                break;
            case 3:
                timKiemDienThoai();
                break;
            case 4:
                muaDienThoai();
                break;
            case 5:
                thanhToanGioHang();
                break;
            case 6:
                sapXepDienThoaiTheoGia(true);
                break;
            case 7:
                sapXepDienThoaiTheoGia(false);
                break;
            case 8:
                hienThiTongTienKho();
                break;
            case 9:
                hienThiTongSoLuongTheoHang();
                break;
            case 10:
                thoat();
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 10);
}

menu();