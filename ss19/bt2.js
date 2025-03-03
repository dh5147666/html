let char = prompt("Mời bạn nhập 1 kí tự");
let chucai = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (char.length === 1 && chucai.indexOf(char !== -1)) {
    alert(`ký tự ${input} là chữ cái`);
} else {
    alert("không phải là chữ cái");
}