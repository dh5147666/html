let listStudent = [];
let choice = 0;
let str = [];
do {
    choice = +prompt("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            inputList();
            break;
        case 2:
            displayList();
            break;
        case 3:
            findName();
            break;
        case 4:
            deleteName();
            break;
        case 5:
            console.log(`Thoat chuong trinh`);
            break;
        default:
            console.log(`Lua chon khong hop le`);
            break;
    }
} while (choice != 5);
function inputList() {
    let n = +prompt("nhap so luong sinh vien muon them: ");
    for (let i = 0; i < n; i++) {
        let student = prompt(`nhap ho va ten cua sinh vien thu ${i + 1}:`);
        listStudent.push(student);
    }
}
function displayList() {
    console.log(listStudent);
}
function findName() {
    let count = 0;
    let name = prompt("nhap ten sinh vien muon tim: ");
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].endsWith(name)) {
            console.log(listStudent[i]);
            count++;
        }
    }
    if (count == 0) {
        console.log(`sinh vien khong co trong danh sach`);
    }
}
function deleteName() {
    let confirm;
    let nameDele = prompt("nhap ten sinh vien muon xoa: ");
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].endsWith(nameDele)) {
            confirm = prompt("ban co chac chan muon xoa khong?");
            if (confirm.includes("yes")) {
                listStudent.splice(i, 1);
            }
            return;
        }
    }
    console.log(`khong tim thay sinh vien trong danh sach`);
}