function calculateSum() {
    let n = document.getElementById("number").value;
    n = parseInt(n);
    if (isNaN(n) || n < 1) {
        document.getElementById("result").innerText = "Vui lòng nhập một số nguyên dương";
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    document.getElementById("result").innerText = `Tổng từ 1 đến ${n} là: ${sum}`;
}