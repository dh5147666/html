let a = Number(prompt("Mời bạn nhập giá trị cuả a"));
let b = Number(prompt("Mời bạn nhập giá trị cuả b"));
let c = Number(prompt("Mời bạn nhập giá trị cuả c"));
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phương trình vô số nghiệm')
        } else {
            alert('phương trình vô nghiệm')
        }
    } else {
        x = -c / b
        alert('nghiệm phương trình x = ' + x)
    }
} else {
    let dt = b * b - 4 * a * c;
    if (dt < 0) {
        alert('phương trình vô nghiệm')
    } else if (dt == 0) {
        x = -b / (2 * a)
        alert('nghiệm phương trình x1 = x2 = ' + x)
    } else {
        x1 = (-b + Math.sqrt(dt)) / (2 * a)
        x2 = (-b - Math.sqrt(dt)) / (2 * a)
        alert(`nghiệm x1 = ${x1}, x2 = ${x2}`)
    }
}