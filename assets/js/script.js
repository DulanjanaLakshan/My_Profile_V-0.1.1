$("#m_img").click(function () {
    $("#mobile").css({"display": "block"});
    $("#m_img2").css({"display": "block"});
    $("#m_img").css({"display": "none"});
})
$("#m_img2").click(function () {
    $("#mobile").css({"display": "none"});
    $("#m_img").css({"display": "block"});
    $("#m_img2").css({"display": "none"});
})
var type=new Typed('.animate',{
    strings:[
        "Full Stack Developer.",
        "YouTuber."
    ],
    typeSpeed:100,
    backSpeed:50,
    loop:true
});