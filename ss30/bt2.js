let books = [
    { id: 1, name: "Sách A", price: 100000, quantity: 10, category: "Văn học" },
    { id: 2, name: "Sách B", price: 150000, quantity: 5, category: "Khoa học" },
    { id: 3, name: "Sách C", price: 200000, quantity: 8, category: "Văn học" },
    { id: 4, name: "Sách D", price: 120000, quantity: 12, category: "Kinh tế" }
];

let cart = [];

function hienThiSachTheoTheLoai() {
    let category = prompt("Nhập tên thể loại sách cần xem:");
    let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());

    if (filteredBooks.length === 0) {
        alert("Không có sách nào trong thể loại này.");
        return;
    }

    let output = "Danh sách sách trong thể loại " + category + ":\n";
    filteredBooks.forEach(book => {
        output += "ID: " + book.id + "\n" +
            "Tên: " + book.name + "\n" +
            "Giá: " + book.price + "\n" +
            "Số lượng: " + book.quantity + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function themSachMoi() {
    let id = parseInt(prompt("Nhập ID sách:"));
    let name = prompt("Nhập tên sách:");
    let price = parseFloat(prompt("Nhập giá sách:"));
    let quantity = parseInt(prompt("Nhập số lượng sách:"));
    let category = prompt("Nhập thể loại sách:");

    books.push({ id, name, price, quantity, category });
    alert("Đã thêm sách mới thành công!");
}

function timKiemSach() {
    let keyword = prompt("Nhập tên sách hoặc ID sách cần tìm:");
    let foundBooks = books.filter(book =>
        book.name.toLowerCase().includes(keyword.toLowerCase()) || book.id.toString() === keyword
    );

    if (foundBooks.length === 0) {
        alert("Không tìm thấy sách.");
        return;
    }

    let output = "Kết quả tìm kiếm:\n";
    foundBooks.forEach(book => {
        output += "ID: " + book.id + "\n" +
            "Tên: " + book.name + "\n" +
            "Giá: " + book.price + "\n" +
            "Số lượng: " + book.quantity + "\n" +
            "Thể loại: " + book.category + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function muaSach() {
    let id = parseInt(prompt("Nhập ID sách cần mua:"));
    let quantity = parseInt(prompt("Nhập số lượng cần mua:"));

    let book = books.find(book => book.id === id);
    if (!book) {
        alert("Không tìm thấy sách với ID này.");
        return;
    }

    if (book.quantity < quantity) {
        alert("Số lượng sách trong kho không đủ.");
        return;
    }

    book.quantity -= quantity;
    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: book.id, name: book.name, price: book.price, quantity });
    }
    alert("Đã mua sách thành công!");
}

function sapXepSachTheoGia(tangDan = true) {
    books.sort((a, b) => tangDan ? a.price - b.price : b.price - a.price);
    hienThiTatCaSach();
}

function hienThiTatCaSach() {
    if (books.length === 0) {
        alert("Kho sách trống.");
        return;
    } 1

    let output = "Danh sách tất cả sách:\n";
    books.forEach(book => {
        output += "ID: " + book.id + "\n" +
            "Tên: " + book.name + "\n" +
            "Giá: " + book.price + "\n" +
            "Số lượng: " + book.quantity + "\n" +
            "Thể loại: " + book.category + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function tinhTongSoLuongVaTongTien() {
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    alert("Tổng số lượng sách đã mua: " + totalQuantity + "\nTổng tiền: " + totalPrice);
}

function hienThiTongSoLuongSachTrongKho() {
    let totalQuantity = books.reduce((sum, book) => sum + book.quantity, 0);
    alert("Tổng số lượng sách trong kho: " + totalQuantity);
}

function thoat() {
    alert("Đã thoát chương trình.");
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu quản lý sách:\n" +
            "1. Hiển thị sách theo thể loại\n" +
            "2. Thêm sách mới vào kho\n" +
            "3. Tìm kiếm sách theo tên hoặc ID\n" +
            "4. Mua sách\n" +
            "5. Sắp xếp sách theo giá tăng dần\n" +
            "6. Sắp xếp sách theo giá giảm dần\n" +
            "7. Tính tổng số lượng sách đã mua và tổng tiền\n" +
            "8. Hiển thị tổng số lượng sách trong kho\n" +
            "9. Thoát\n" +
            "Mời bạn chọn một chức năng (1-9):"
        ));

        switch (choice) {
            case 1:
                hienThiSachTheoTheLoai();
                break;
            case 2:
                themSachMoi();
                break;
            case 3:
                timKiemSach();
                break;
            case 4:
                muaSach();
                break;
            case 5:
                sapXepSachTheoGia(true);
                break;
            case 6:
                sapXepSachTheoGia(false);
                break;
            case 7:
                tinhTongSoLuongVaTongTien();
                break;
            case 8:
                hienThiTongSoLuongSachTrongKho();
                break;
            case 9:
                thoat();
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 9);
}

menu();