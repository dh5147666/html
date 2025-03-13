let choice;
do {
    let menu = "Menu:\n";
    menu += "1. Nhập danh sách sinh viên. \n";
    menu += "2. Hiển thị danh sách sinh viên.\n";
    menu += "3. Tìm sinh viên theo tên.\n";
    menu += "4. Xóa sinh viên khỏi danh sách.\n";
    menu += "5. Thoát\n";
    menu += "Mời bạn chọn một chức năng 1-5: ";
    choice = parseInt(prompt(menu));
} while (choice !== 5);
alert("Thoát chương trình.");