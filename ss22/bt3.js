let input = prompt("Mời bạn nhập vào dãy số bất kỳ: ");
let array = input.split('').map(Number);

console.log("Mảng ban đầu: " + array);

let reversedArray = array.reverse();

console.log("Mảng sau khi đảo ngược: " + reversedArray);