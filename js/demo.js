var x;
x = 10; // numbur là  số
x = "hello Word"; //
x = "true"; // đúng sai
console.log(x);  // in ra
if (x == true){
    console.log("Demo 1 T2207A");
} else {
    console.log(" x false");
}
for( var i=0; i<10 ; i++){
    console.log("abcd");
}
var s1 = 5; // numbur + numbur  = numbur
var s2 = "xin chào"; // num + string = string
// string + numbur = string
// str + str = string;
// 10 + "abc" =  "10abc"
// "abc" + "abc" = abc
console.log(s1 + s2);
console.log(s2+s1);
console.log(5 + "5");

var a = []; // giá trị của biến a là 1 mảng
a [0] = 1;
a[1] = "hello";
a.push(100);// a[2] = 100;
a.push("t2207a");


// hàm :
function tinhtong(a,b) {
    return a+b;
}
function tinhhieu(a,b) {
    console.log(a+b);
}

var tinhtich = function (a,b) {
    return a+b;
}
var  z = tinhtong(2,3);
var k = tinhtich(3,4);
tinhhieu(5,2);


var t = 0;
var le = 1;
function demo() {
    var xyz = document.getElementById("head");
    xyz.innerText += ( " " +t);
    t = t + 1;


    if (t < 0){
        clearInterval(at);// Đặt biến để huwuiwnsg quy tắc cayjyj , khi t < 0 xóa quy tắcc
    }
}


//setTimeout(demo,1000);// sau 1 giây sẽ chayj hàm này  1 lần callback function
var at =  setInterval(demo,1000); // 3s chạy 1 lần khi nào tắt tab thì thoi
console.log("after demo...");



