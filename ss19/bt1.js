function kiemTraThang() {
    let thang = parseInt(document.getElementById("thang").value);
    let ketQua = document.getElementById("ketQua");
    let soNgay;

    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgay = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgay = 30;
            break;
        case 2:
            soNgay = "28 hoặc 29 ngày năm nhuận";
            break;
        default:
            ketQua.innerText = "Tháng không hợp lệ!";
            return;
    }

    ketQua.innerText = `Tháng ${thang} có ${soNgay} ngày`;
}