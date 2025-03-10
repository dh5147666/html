function findSecondLargest(n, arr) {
    if (n < 0) {
        console.log("Số lượng phần tử không được nhỏ hơn 0");
        return;
    }
    if (n === 0 || arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let uniqueArr = [...new Set(arr)];
    if (uniqueArr.length < 2) {
        console.log("Không có số lớn thứ hai");
        return;
    }

    uniqueArr.sort((a, b) => b - a);
    console.log(uniqueArr[1]);
}