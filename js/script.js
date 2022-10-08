//图片轮播
let picture_list = ["../img/1.jpg", "../img/2.jpg", "../img/3.jpg", "../img/4.jpg", "../img/5.jpg", "../img/6.jpg"];
let count = 0;
document.getElementById("left").addEventListener("click", Play_left);
document.getElementById("right").addEventListener("click", Play_right);
//window.setInterval(Play_left, 3000)
function Play_left() {
    count++;
    if (count > 5) {
        count = 0;
    }
    document.getElementById("picture").src = picture_list[count];
}
function Play_right() {
    count--;
    if (count < 0) {
        count = 5;
    }
    document.getElementById("picture").src = picture_list[count];
}
//显示当地时间
