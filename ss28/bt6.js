const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

function tinhTongTien(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        console.log("Tên sản phẩm: " + cart[i].name);
        console.log("Giá tiền: " + cart[i].price + " VND");
        console.log("Số lượng: " + cart[i].quantity);
        console.log("-------------------------");
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

let tongTien = tinhTongTien(cart);
console.log("Tổng tiền trong giỏ hàng là: " + tongTien + " VND");