let ngay1 = prompt("Ngày thứ nhất");
let ngay2 = prompt("Ngày thứ hai");
let dolech = Math.abs(new Date(ngay1) - new Date(ngay2)) / (1000 * 60 * 60 * 24);
document.write("Độ lệch là ", dolech, "ngày")