let array = [];
let choice;

do {
    console.log("Menu:");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7. Thoát chương trình");

    choice = parseInt(prompt("Mời bạn chọn một chức năng (1-7): "));

    if (choice === 1) {
        let n = parseInt(prompt("Mời bạn nhập vào số phần tử của mảng: "));
        array = [];
        for (let i = 0; i < n; i++) {
            let element = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
            array.push(element);
        }
    } else if (choice === 2) {
        console.log("Mảng hiện tại: " + array);
    } else if (choice === 3) {
        let evenArray = array.filter(x => x % 2 === 0);
        let oddArray = array.filter(x => x % 2 !== 0);
        console.log("Các phần tử chẵn: " + evenArray);
        console.log("Các phần tử lẻ: " + oddArray);
    } else if (choice === 4) {
        let sum = array.reduce((acc, val) => acc + val, 0);
        let average = sum / array.length;
        console.log("Trung bình cộng của mảng là: " + average);
    } else if (choice === 5) {
        let index = parseInt(prompt("Nhập vị trí của phần tử cần xóa: "));
        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
            console.log("Mảng sau khi xóa phần tử tại vị trí " + index + ": " + array);
        } else {
            console.log("Vị trí không hợp lệ.");
        }
    } else if (choice === 6) {
        if (array.length < 2) {
            console.log("Mảng không đủ phần tử để tìm phần tử lớn thứ hai.");
        } else {
            let max = Math.max(...array);
            let filteredArray = array.filter(x => x !== max);
            let secondMax = Math.max(...filteredArray);
            console.log("Phần tử lớn thứ hai trong mảng là: " + secondMax);
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
    } else {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);