/**
 * Created by lisa on 16/6/24.
 */
var value = 1;
var func = function () {
    document.getElementById("box").style.left=-value*100 + "%";
    if (value === 1) {
        value = 0
    } else {
        value = 1;
    }
  console.log("shabi");
};


setInterval(func, 3000);