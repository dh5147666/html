let choice;
let danhSachSoNguyen = [];

do {
    let menu = "Menu:\n";
    menu += "1. Nhập danh sách số nguyên\n";
    menu += "2. Tính trung bình các số\n";
    menu += "3. Tìm số chẵn lớn nhất\n";
    menu += "4. Tìm số lẻ nhỏ nhất\n";
    menu += "5. Thoát\n";
    menu += "Mời bạn chọn một chức năng 1-5: ";
    choice = parseInt(prompt(menu));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Mời bạn nhập vào số phần tử của danh sách: "));
            danhSachSoNguyen = [];
            for (let i = 0; i < n; i++) {
                let so = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
                if (isNaN(so)) {
                    alert("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
                    i--;
                }
                danhSachSoNguyen.push(so);
            }
            break;
        case 2:
            if (danhSachSoNguyen.length === 0) {
                alert("Danh sách số nguyên rỗng.");
            } else {
                let sum = danhSachSoNguyen.reduce((acc, val) => acc + val, 0);
                let average = sum / danhSachSoNguyen.length;
                alert("Trung bình các số: " + average);
            }
            break;
        case 3:
            if (danhSachSoNguyen.length === 0) {
                alert("Danh sách số nguyên rỗng.");
            } else {
                let soChan = danhSachSoNguyen.filter(x => x % 2 === 0);
                if (soChan.length === 0) {
                    alert("Không có số chẵn trong danh sách.");
                } else {
                    let max = Math.max(...soChan);
                    alert("Số chẵn lớn nhất: " + max);
                }
            }
            break;
        case 4:
            if (danhSachSoNguyen.length === 0) {
                alert("Danh sách số nguyên rỗng.");
            } else {
                let soLe = danhSachSoNguyen.filter(x => x % 2 !== 0);
                if (soLe.length === 0) {
                    alert("Không có số lẻ trong danh sách.");
                } else {
                    let min = Math.min(...soLe);
                    alert("Số lẻ nhỏ nhất: " + min);
                }
            }
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:

            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
while (choice !== 5);
