/*
var menuList = document.getElementById("menuList")
menuList.style.maxHeight="0px";
function togglemenu() {
    if (menuList.style.maxHeight=="0px") {
        menuList.css('maxHeight', '130px');
    }
    else {
        menuList.css('maxHeight', '0px');
    }
}*/

$("#open").click(function () {
    $("#close").css('display','block');
    $("#open").css('display','none');
    $("#mobile").css('display','block');
})
$("#close").click(function () {
    $("#close").css('display','none');
    $("#open").css('display','block');
    $("#mobile").css('display','none');
})

