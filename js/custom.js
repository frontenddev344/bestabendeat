function openNav() {
    document.getElementById("mySidenavs").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var parent = this.parentElement;
        var panel = this.nextElementSibling;
        var mainPanel = document.querySelector(".main-panel");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            // panel.style.border = "none";
        } else {
            panel.style.maxHeight = panel.scrollHeight + 100 + "px";
            parent.style.maxHeight =
                parseInt(parent.style.maxHeight) + panel.scrollHeight + 100 + "px";
        }
    });
}
