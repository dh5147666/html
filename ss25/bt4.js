function kiemTraSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


let so = parseInt(prompt("Nhập vào một số nguyên dương bất kỳ: "));
if (kiemTraSoNguyenTo(so)) {
    console.log(so + " là số nguyên tố.");
} else {
    console.log(so + " không phải là số nguyên tố.");
}