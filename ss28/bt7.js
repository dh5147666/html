let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

function locSinhVienDiemCao(students) {
    return students.filter(student => {
        let average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
        return average >= 8;
    });
}

let sinhVienDiemCao = locSinhVienDiemCao(students);
console.log("Danh sách sinh viên có điểm trung bình >= 8:");
sinhVienDiemCao.forEach(student => {
    console.log("Tên: " + student.name);
    console.log("Điểm Toán: " + student.scores.math);
    console.log("Điểm Anh: " + student.scores.english);
    console.log("Điểm Văn: " + student.scores.literature);
    console.log("-------------------------");
});