let money = prompt("Nhập vào số tiền gửi :");
let month = prompt("Nhập vào số tháng gửi :");
let laiSuatNam = 0.43 / 100;
let laiSuatThang = laiSuatNam / 12;
let laiSuat = money * laiSuatThang * month;
document.write("Số tiền lãi nhận được là: ", laiSuat, " VND");