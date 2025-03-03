function chuyenDoiTien() {
    let soTien = parseFloat(document.getElementById("soTien").value);
    let loaiTien = document.getElementById("loaiTien").value;
    let tyGia = 23000;
    let ketQua = document.getElementById("ketQua");
    let ketQuaChuyenDoi;

    if (isNaN(soTien) || soTien <= 0) {
        ketQua.innerText = "Vui lòng nhập số tiền hợp lệ!";
        return;
    }

    if (loaiTien === "VNDtoUSD") {
        ketQuaChuyenDoi = (soTien / tyGia).toFixed(2) + " USD";
    } else {
        ketQuaChuyenDoi = (soTien * tyGia).toLocaleString() + " VND";
    }

    ketQua.innerText = `Kết quả: ${ketQuaChuyenDoi}`;
}
