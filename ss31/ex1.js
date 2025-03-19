// Lấy các phần tử từ DOM
const textElement = document.querySelector(".text");
const hideButton = document.querySelector(".open");
const showButton = document.querySelector(".close");

// Thêm sự kiện cho nút "Hide text"
hideButton.addEventListener("click", () => {
    textElement.style.display = "none"; // Ẩn thẻ <h1>
});

// Thêm sự kiện cho nút "Show text"
showButton.addEventListener("click", () => {
    textElement.style.display = "block"; // Hiển thị thẻ <h1>
});