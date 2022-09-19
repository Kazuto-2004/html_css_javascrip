function demo(){
    var h = document.getElementById("head");
    h.style.color = "red";
}
function demo_1(){
    var h = document.getElementById("head");
    h.style.color = "green";
}

function change(){
    var ip = document.getElementById("ip");
    console.log(ip.value);
}

function changColor() {
    var arr = document.getElementsByTagName("p");// arry
    for (var i=0 i <= arr, length; i++ ){
        arr[i].style.color = "deepplink";
    }
}