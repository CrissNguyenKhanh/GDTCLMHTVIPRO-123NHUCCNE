alert("hi welcome to js"); //bai tap 1
alert("do you want to display this page ?"); bai tap 3

var khanh = prompt("plesae enter yourname?");
alert(` hi ${khanh} how are you ? `);

var khanh1 = prompt("nhap so dau tien ");
var khanh2 = prompt("nhap so thu  hai");
var khanh3 = prompt("nhap so thu ba ");
console.log(`${khanh1} - ${khanh2} = `, khanh1 - khanh2);
console.log(`${khanh1} + ${khanh2} = `, khanh1 + khanh2);
console.log(`${khanh1} * ${khanh2} = `, khanh1 * khanh2);
console.log(`${khanh1} / ${khanh2} = `, khanh1 % khanh2);

giai phuong trinh bac 1
var x = -khanh2 / khanh1;
if (x === 0) {
  console.log("phuong trinh vo so nghiem", x);
} else {
  console.log(`x = `, x);
}
//bai so 6
var delta = Math.pow(khanh2, 2) - 4 * khanh1 * khanh3;
if (delta == 0) {
  console.log("phuong trinh co nghiem kep x =  ", -khanh2 / (2 * khanh1));
} else if (delta > 0) {
  console.log("phuong trinh co 2 nghiem phan biet ");
  console.log("x1 = ", (-khanh1 + Math.sqrt(delta)) / (2 * khanh1));
  console.log("x2 = ", (-khanh1 - Math.sqrt(delta)) / (2 * khanh1));
} else if (delta < 0) {
  console.log("phuong trinh vo nghiem");
// }
//baiso7
var khanh1 = parseFloat(prompt("nhap so dau tien "));
var khanh2 = parseFloat(prompt("nhap so thu 2 "));
var khanh3 = khanh1 + khanh2;
var khanh4 = parseFloat(prompt(`nhap ket qua cua ${khanh1} + ${khanh2}`));
console.log(typeof khanh3);

// if (khanh3 === khanh4) {
  document.write("dap an dung ");
} else {
  document.write("dap an sai ");
}
bai so 8
var macdinh = "20IT";
var khanh = prompt("moi ban nhap lop cua ban ");
if (macdinh.concat(khanh).length > 5) {
  document.write("nhap sai cu phap");
} else {
  document.write(macdinh.concat(khanh));
}
//baitap so 9
var nhap=prompt("nhap 3 so cuoi cua ma sv");
var masv = `20IT ${nhap}`;
//baitap so 10
var khanh = prompt("nhap");
while (khanh.length === 0) {
  alert("nhap lai den khi nao het khoang trong");
  khanh = prompt("nhap di ");
}

//bai tap so 11
var khanh = parseInt(prompt("nhap so tuoi "));
while (khanh < 1 || khanh > 130) {
  alert("nhap lai di ");
  khanh = prompt("nhap lai ");
}

var khanh = [];
for (var i = 0; i < 5; i++) {
  var k = prompt("nhap so cua mang  thu " + i  + ":");
  khanh[i] = k;
}
khanh.sort((a, b) => a - b);
for (var i = 0; i < 5; i++) {
  console.log(khanh[i]);
}
// bai tap so 12
var khanhnap = prompt("nhap ten cua ban ");
var khanhthaydoi = khanhnap.replace("a", "Viet HAN");
document.write(khanhthaydoi);
//bai tap so 13
