function kiemTraCapSoCong(array) {
    if (array.length < 2) {
        return true;
    }

    let difference = array[1] - array[0];

    for (let i = 2; i < array.length; i++) {
        if (array[i] - array[i - 1] !== difference) {
            return false;
        }
    }

    return true;
}


let mang1 = [2, 4, 6, 8, 10];
let mang2 = [1, 3, 7, 9];

console.log("Mảng 1 có phải là cấp số cộng không? " + kiemTraCapSoCong(mang1));
console.log("Mảng 2 có phải là cấp số cộng không? " + kiemTraCapSoCong(mang2)); 