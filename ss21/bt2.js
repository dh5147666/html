let a = prompt("Nhập số a:")
let tongsochan = 0;
let tongsole = 0;
if (a % 2 == 1) {
    tongsole++;
} else {
    tongsochan++;
}

let b = prompt("Nhập số b:")
if (b % 2 == 1) {
    tongsole++;
} else {
    tongsochan++;
}

let c = prompt("Nhập số c:")
if (c % 2 == 1) {
    tongsole++;
} else {
    tongsochan++;
}

let d = prompt("Nhập số d:")
if (d % 2 == 1) {
    tongsole++;
} else {
    tongsochan++;
}

let e = prompt("Nhập số e:")
if (e % 2 == 1) {
    tongsole++;
} else {
    tongsochan++;
}
console.log("Số chẵn: " + tongsochan);
console.log("Số lẻ: " + tongsole);

