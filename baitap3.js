var khanh = document.getElementById("changeBackgroundBtn");
khanh.onclick = function () {
  let newBg = document.getElementById("khanhoi");
  // Thêm class new-background vào thẻ div mới
  newBg.classList.add("new-background");
  // Chèn thẻ div vào body
  newBg.innerHTML = ("<h1>alo em </h1>");
  khanh.classList.add("opacity");
  document.body.appendChild(newBg);
};
//bai 2
var khanh = document.getElementById("text1");
var khanh2 = document.getElementById("text2");

if (khanh2.value == 0) {
  khanh.onfocus = function () {
    alert("focus");
  };
}
khanh.onchange = function () {
  alert("change");
};
khanh.onblur = function () {
  alert("blur");
};
//bai 3
var khanh = document.getElementById("oke");
var khanh2 = document.getElementById("khanh");
var khanh3 = document.getElementById("khanh2");
khanh.onclick = function () {
  khanh2.value = "hello";
  khanh3.value = "hello";
};
//bai4
var khanhvip = document.getElementById("khanh1");
var khanhvip2 = document.getElementById("khanh2");
document.getElementById("khanh1").addEventListener("change", function () {
  // Tạo thẻ div mới
  let newBg = document.createElement("div");
  // Thêm class new-background vào thẻ div mới
  newBg.classList.add("new-background2");

  document.body.appendChild(newBg);
  setTimeout(() => {
    alert("hey... turn");
  }, 1500);
});
