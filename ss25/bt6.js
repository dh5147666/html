function isPalindrome(str) {

    str = str.replace(/\s+/g, '').toLowerCase();


    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


let input = prompt("Mời bạn nhập vào một chuỗi ký tự: ");


if (isPalindrome(input)) {
    console.log(input + " là chuỗi ký tự đối xứng.");
} else {
    console.log(input + " không phải là chuỗi ký tự đối xứng.");
}