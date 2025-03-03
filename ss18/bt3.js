function kiemTraDangNhap() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "") {
        document.getElementById("ketQua").innerHTML = "<span class='text-warning'>Cancelled</span>";
    } else if (username === "ADMIN") {
        if (password === "TheMaster") {
            document.getElementById("ketQua").innerHTML = "<span class='text-success'>Welcome.</span>";
        } else if (password === "") {
            document.getElementById("ketQua").innerHTML = "<span class='text-warning'>Cancelled</span>";
        } else {
            document.getElementById("ketQua").innerHTML = "<span class='text-danger'>Wrong password.</span>";
        }
    } else {
        document.getElementById("ketQua").innerHTML = "<span class='text-danger'>I don’t know you</span>";
    }
}