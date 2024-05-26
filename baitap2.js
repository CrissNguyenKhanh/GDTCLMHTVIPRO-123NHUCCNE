alert("1.sin cua mot so  2.cos cua mot so  3.tan cua mot so ");

var n = parseFloat(prompt("Chon chuong trinh  "));
var k = parseFloat(prompt("nhap mot so bat ki ?"));
switch (n) {
  case 1: {
    document.write(Math.sin(k));
  }
  case 2: {
    document.write(Math.cos(k));
  }
  case 3: {
    document.write(Math.tan(k));
  }
}
var array = ["red", "blue", "green"];
for (var i = 0; i < array.length; i++) {
  console.log("color " + i + "=" + array[i]);
}

function click1() {
  var khanh = document.getElementById("text1").value;
  const result = eval(khanh);
  document.getElementById("text2").value = result;
}

function testclick1() {
    var khanh = document.getElementById("text1").value;
    var numberKhanh = Number(khanh);
  
    if (Number.isInteger(numberKhanh)) {
      alert("ok"); // Nếu chuyển được thành số nguyên, hiển thị "ok"
    } else {
      alert("sai"); // Nếu không, hiển thị "sai"
    }
  }
