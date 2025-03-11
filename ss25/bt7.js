function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


let input = prompt("Mời bạn nhập vào một chuỗi ký tự: ");
let result = capitalizeFirstLetter(input);
console.log("Chuỗi sau khi biến đổi: " + result);