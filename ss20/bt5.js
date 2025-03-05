let a = parseInt(prompt("Nhập a: "));
let b = parseInt(prompt("Nhập b: "));
let product = 1;

if (!Number.isInteger(a) || !Number.isInteger(b) || a != 0) {
    console.log("Không hợp lệ");
} else if (b < 0) {
    for (let i = 0; i < -b; i++) {
        product *= a;
    }
    console.log(1 / product);
} else {
    for (let i = 0; i < b; i++) {
        product *= a;
    }
    console.log(product);
}