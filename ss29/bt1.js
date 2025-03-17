let contacts = [];
let nextId = 1;

function themContact() {
    let name;
    do {
        name = prompt("Nhập tên (chỉ chứa chữ cái):");
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert("Tên không hợp lệ. Vui lòng nhập lại (chỉ chứa chữ cái).");
        }
    } while (!/^[a-zA-Z\s]+$/.test(name));

    let email;
    do {
        email = prompt("Nhập email (phải chứa ký tự '@'):");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Email không hợp lệ. Vui lòng nhập lại (phải chứa ký tự '@').");
        }
    } while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

    let phone;
    do {
        phone = prompt("Nhập số điện thoại (chỉ chứa số):");
        if (!/^\d+$/.test(phone)) {
            alert("Số điện thoại không hợp lệ. Vui lòng nhập lại (chỉ chứa số).");
        }
    } while (!/^\d+$/.test(phone));

    contacts.push({ id: nextId++, name: name, email: email, phone: phone });
    alert("Đã thêm liên hệ thành công!");
}

function hienThiDanhBa() {
    if (contacts.length === 0) {
        alert("Danh bạ trống.");
        return;
    }

    let output = "Danh sách liên hệ:\n";
    contacts.forEach(function (contact) {
        output += "ID: " + contact.id + "\n" +
            "Tên: " + contact.name + "\n" +
            "Email: " + contact.email + "\n" +
            "Số điện thoại: " + contact.phone + "\n" +
            "-------------------------\n";
    });
    alert(output);
}

function timKiemContact() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let contact = contacts.find(function (c) {
        return c.phone === phone;
    });
    if (contact) {
        let output = "Thông tin liên hệ:\n" +
            "ID: " + contact.id + "\n" +
            "Tên: " + contact.name + "\n" +
            "Email: " + contact.email + "\n" +
            "Số điện thoại: " + contact.phone;
        alert(output);
    } else {
        alert("Không tìm thấy liên hệ");
    }
}

function capNhatContact() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần cập nhật:"));
    let contact = contacts.find(function (c) {
        return c.id === id;
    });
    if (contact) {
        let name;
        do {
            name = prompt("Nhập tên mới (chỉ chứa chữ cái):", contact.name);
            if (!/^[a-zA-Z\s]+$/.test(name)) {
                alert("Tên không hợp lệ. Vui lòng nhập lại (chỉ chứa chữ cái).");
            }
        } while (!/^[a-zA-Z\s]+$/.test(name));

        let email;
        do {
            email = prompt("Nhập email mới (phải chứa ký tự '@'):", contact.email);
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Email không hợp lệ. Vui lòng nhập lại (phải chứa ký tự '@').");
            }
        } while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

        let phone;
        do {
            phone = prompt("Nhập số điện thoại mới (chỉ chứa số):", contact.phone);
            if (!/^\d+$/.test(phone)) {
                alert("Số điện thoại không hợp lệ. Vui lòng nhập lại (chỉ chứa số).");
            }
        } while (!/^\d+$/.test(phone));

        contact.name = name;
        contact.email = email;
        contact.phone = phone;
        alert("Đã cập nhật liên hệ thành công!");
    } else {
        alert("Không tìm thấy liên hệ với ID này.");
    }
}

function xoaContact() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần xóa:"));
    let index = contacts.findIndex(function (c) {
        return c.id === id;
    });
    if (index !== -1) {
        contacts.splice(index, 1);
        alert("Đã xóa liên hệ thành công!");
    } else {
        alert("Không tìm thấy liên hệ với ID này.");
    }
}

function thoat() {
    alert("Đã thoát chương trình");
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu:\n" +
            "1. Thêm liên hệ\n" +
            "2. Hiển thị danh bạ\n" +
            "3. Tìm kiếm liên hệ\n" +
            "4. Cập nhật liên hệ\n" +
            "5. Xóa liên hệ\n" +
            "6. Thoát\n" +
            "Mời bạn chọn một chức năng (1-6):"
        ));

        switch (choice) {
            case 1:
                themContact();
                break;
            case 2:
                hienThiDanhBa();
                break;
            case 3:
                timKiemContact();
                break;
            case 4:
                capNhatContact();
                break;
            case 5:
                xoaContact();
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