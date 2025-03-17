let products = [];
let nextId = 1;

function themSanPham() {
    let name = prompt("Nhập tên sản phẩm:");
    let price = parseFloat(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

    products.push({ id: nextId++, name, price, category, quantity });
    alert("Đã thêm sản phẩm thành công!");
}

function hienThiTatCaSanPham() {
    if (products.length === 0) {
        alert("Danh sách sản phẩm trống.");
        return;
    }

    let output = "Danh sách sản phẩm:\n";
    products.forEach(product => {
        output += "ID: " + product.id + "\n" +
            "Tên: " + product.name + "\n" +
            "Giá: " + product.price + "\n" +
            "Danh mục: " + product.category + "\n" +
            "Số lượng: " + product.quantity + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function hienThiChiTietSanPham() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xem chi tiết:"));
    let product = products.find(p => p.id === id);

    if (product) {
        let output = "Chi tiết sản phẩm:\n" +
            "ID: " + product.id + "\n" +
            "Tên: " + product.name + "\n" +
            "Giá: " + product.price + "\n" +
            "Danh mục: " + product.category + "\n" +
            "Số lượng: " + product.quantity;
        alert(output);
    } else {
        alert("Không tìm thấy sản phẩm với ID này.");
    }
}

function capNhatSanPham() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let product = products.find(p => p.id === id);

    if (product) {
        product.name = prompt("Nhập tên mới:", product.name);
        product.price = parseFloat(prompt("Nhập giá mới:", product.price));
        product.category = prompt("Nhập danh mục mới:", product.category);
        product.quantity = parseInt(prompt("Nhập số lượng mới:", product.quantity));
        alert("Đã cập nhật sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này.");
    }
}

function xoaSanPham() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = products.findIndex(p => p.id === id);

    if (index !== -1) {
        products.splice(index, 1);
        alert("Đã xóa sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này.");
    }
}

function locSanPhamTheoKhoangGia() {
    let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));

    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (filteredProducts.length > 0) {
        let output = "Danh sách sản phẩm trong khoảng giá:\n";
        filteredProducts.forEach(product => {
            output += "ID: " + product.id + "\n" +
                "Tên: " + product.name + "\n" +
                "Giá: " + product.price + "\n" +
                "Danh mục: " + product.category + "\n" +
                "Số lượng: " + product.quantity + "\n" +
                "-------------------------\n";
        });
        alert(output);
    } else {
        alert("Không có sản phẩm nào trong khoảng giá này.");
    }
}

function thoat() {
    alert("Đã thoát chương trình.");
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu:\n" +
            "1. Thêm sản phẩm\n" +
            "2. Hiển thị tất cả sản phẩm\n" +
            "3. Hiển thị chi tiết sản phẩm theo ID\n" +
            "4. Cập nhật thông tin sản phẩm theo ID\n" +
            "5. Xóa sản phẩm theo ID\n" +
            "6. Lọc sản phẩm theo khoảng giá\n" +
            "7. Thoát\n" +
            "Mời bạn chọn một chức năng (1-7):"
        ));

        switch (choice) {
            case 1:
                themSanPham();
                break;
            case 2:
                hienThiTatCaSanPham();
                break;
            case 3:
                hienThiChiTietSanPham();
                break;
            case 4:
                capNhatSanPham();
                break;
            case 5:
                xoaSanPham();
                break;
            case 6:
                locSanPhamTheoKhoangGia();
                break;
            case 7:
                thoat();
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 7);
}

menu();