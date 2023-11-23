// Edits.js
function openNav() {
    document.getElementById("navbar").style.width = "100px";
    document.getElementById("container").style.marginLeft = "100px";
    document.getElementById("container").style.paddingLeft = "10px";
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("container").style.paddingLeft = "0";
}