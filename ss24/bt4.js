let array = [];
let choice;

do {
    console.log("Menu:");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");

    choice = parseInt(prompt("Mời bạn chọn một chức năng (1-7): "));

    if (choice === 1) {
        let rows = parseInt(prompt("Mời bạn nhập vào số hàng của mảng: "));
        let cols = parseInt(prompt("Mời bạn nhập vào số cột của mảng: "));
        array = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                let element = parseInt(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}: `));
                row.push(element);
            }
            array.push(row);
        }
    } else if (choice === 2) {
        console.log("Mảng 2 chiều hiện tại:");
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else if (choice === 3) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                sum += array[i][j];
            }
        }
        console.log("Tổng các phần tử trong mảng là: " + sum);
    } else if (choice === 4) {
        let max = array[0][0];
        let maxIndex = [0, 0];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] > max) {
                    max = array[i][j];
                    maxIndex = [i, j];
                }
            }
        }
        console.log("Phần tử lớn nhất trong mảng là: " + max + " tại chỉ số: [" + maxIndex[0] + ", " + maxIndex[1] + "]");
    } else if (choice === 5) {
        let rowIndex = parseInt(prompt("Nhập chỉ số hàng để tính trung bình cộng (bắt đầu từ 0): "));
        if (rowIndex >= 0 && rowIndex < array.length) {
            let sum = array[rowIndex].reduce((acc, val) => acc + val, 0);
            let average = sum / array[rowIndex].length;
            console.log("Trung bình cộng của các phần tử trong hàng " + rowIndex + " là: " + average);
        } else {
            console.log("Chỉ số hàng không hợp lệ.");
        }
    } else if (choice === 6) {
        for (let i = 0; i < array.length; i++) {
            array[i].reverse();
        }
        console.log("Mảng sau khi đảo ngược các hàng:");
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
    } else {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);