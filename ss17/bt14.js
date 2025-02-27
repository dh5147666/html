
let r = prompt("Nhập bán kính R' của hình trụ:");
let h = prompt("Nhập chiều cao h của hình trụ:");
let Sxq = 2 * Math.PI * r * h;
let Stp = 2 * Math.PI * r * (r + h);
let V = Math.PI * Math.pow(r, 2) * h;
let Pd = 2 * Math.PI * r;
document.write("Diện tích xung quanh của hình trụ là: ", Sxq.toFixed(2));
document.write("<br>Diện tích toàn phần của hình trụ là: ", Stp.toFixed(2));
document.write("<br>Thể tích của hình trụ là: ", V.toFixed(2));
document.write("<br>Chu vi đáy của hình trụ là: ", Pd.toFixed(2));