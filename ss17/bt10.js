let n = prompt("Nhập vào giá trị n");
let cn = Math.sqrt(n)
if (cn % 1 == 0) {
    document.write(n, " Là một số chính phương.")
} else {
    document.write(n, " Không phải là một số chính phương.");
}