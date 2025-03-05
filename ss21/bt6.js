let a = parseFloat(prompt("Mời bạn nhập số a: "));
let b = parseFloat(prompt("Mời bạn nhập số b: "));
let c = parseFloat(prompt("Mời bạn nhập số c: "));

let delta = b * b - 4 * a * c;

if (delta < 0) {
    console.log("Phương trình vô nghiệm");
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép: x = " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
}