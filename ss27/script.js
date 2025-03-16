document.addEventListener("DOMContentLoaded", function () {
    const balloons = document.querySelectorAll(".balloon");

    balloons.forEach((balloon, index) => {
        const delay = index * 0.5; // Tạo độ trễ cho mỗi quả bóng bay
        balloon.style.animationDelay = `${delay}s`;
        balloon.style.left = `${Math.random() * 100}%`; // Đặt vị trí ngẫu nhiên cho mỗi quả bóng bay
    });

    const fireworks = document.querySelectorAll(".firework");

    fireworks.forEach((firework, index) => {
        const delay = index * 0.5; // Tạo độ trễ cho mỗi pháo hoa
        firework.style.animationDelay = `${delay}s`;
        firework.style.left = `${Math.random() * 100}%`; // Đặt vị trí ngẫu nhiên cho mỗi pháo hoa
    });
});