// var khanh = document.querySelector("h1");

// // text content la bo qua atribute de lay full gia tri cua no
// // con inner text la lay ca gia tri cua no nhung ma co ca atribute
// // inner text la thuc su nhung gi cac ban nhin thay \
// // con text content la gia tri thuc su nam ben trong thuoc tinh

// khanh.innerHTML = "<h1> heading</h1>";

// console.log([khanh]);
var khanh = document.querySelector(".box");
khanh.classList.add("red", "blue");
setInterval(() => {
    khanh.classList.toggle('red');
}, 1000);