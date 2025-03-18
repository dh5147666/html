let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

function hienThiSanPhamTheoDanhMuc() {
    let category = prompt("Nhập tên danh mục sản phẩm cần xem:");
    let filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());

    if (filteredProducts.length === 0) {
        alert("Không có sản phẩm nào trong danh mục này.");
        return;
    }

    let output = "Danh sách sản phẩm trong danh mục " + category + ":\n";
    filteredProducts.forEach(product => {
        output += "ID: " + product.id + "\n" +
            "Tên: " + product.name + "\n" +
            "Giá: " + product.price + "\n" +
            "Số lượng: " + product.quantity + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function chonSanPhamDeMua() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần mua:"));
    let product = products.find(product => product.id === id);

    if (!product) {
        alert("Sản phẩm không có trong cửa hàng.");
        return;
    }

    let quantity = parseInt(prompt("Nhập số lượng sản phẩm muốn mua:"));
    if (quantity > product.quantity) {
        alert("Số lượng sản phẩm trong cửa hàng không đủ.");
        return;
    }

    product.quantity -= quantity;

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity });
    }

    alert("Mua sản phẩm thành công!");
}

function sapXepSanPhamTheoGia(tangDan = true) {
    products.sort((a, b) => tangDan ? a.price - b.price : b.price - a.price);
    hienThiTatCaSanPham();
}

function hienThiTatCaSanPham() {
    if (products.length === 0) {
        alert("Cửa hàng không có sản phẩm.");
        return;
    }

    let output = "Danh sách tất cả sản phẩm:\n";
    products.forEach(product => {
        output += "ID: " + product.id + "\n" +
            "Tên: " + product.name + "\n" +
            "Giá: " + product.price + "\n" +
            "Số lượng: " + product.quantity + "\n" +
            "Danh mục: " + product.category + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function tinhTongTienGioHang() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert("Tổng tiền thanh toán trong giỏ hàng: " + total + " VND");
}

function thoat() {
    alert("Đã thoát chương trình.");
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu quản lý sản phẩm:\n" +
            "1. Hiển thị sản phẩm theo danh mục\n" +
            "2. Chọn sản phẩm để mua\n" +
            "3. Sắp xếp sản phẩm theo giá tăng dần\n" +
            "4. Sắp xếp sản phẩm theo giá giảm dần\n" +
            "5. Tính số tiền thanh toán trong giỏ hàng\n" +
            "6. Thoát\n" +
            "Mời bạn chọn một chức năng (1-6):"
        ));

        switch (choice) {
            case 1:
                hienThiSanPhamTheoDanhMuc();
                break;
            case 2:
                chonSanPhamDeMua();
                break;
            case 3:
                sapXepSanPhamTheoGia(true);
                break;
            case 4:
                sapXepSanPhamTheoGia(false);
                break;
            case 5:
                tinhTongTienGioHang();
                break;
            case 6:
                thoat();
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 6);
}

menu();