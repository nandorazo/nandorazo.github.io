myID = document.getElementById("fixedDiv");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 500) {
        myID.className = "btn show"
    } else {
        myID.className = "btn hide"
    }
};

window.addEventListener("scroll", myScrollFunc);