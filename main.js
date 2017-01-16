var lis = document.getElementsByTagName("section");
var title = "";
var url = "http://v.qq.com/iframe/player.html?vid=p0161yu7cse&auto=0";

window.onload = function () {
    for(var i=0;i<lis.length;i++){
        lis[i].onclick = function () {
            document.getElementById("dummy-image").style.display = "block";
            document.getElementById("img"+this.id).style.display = "block";
            document.getElementById("play").style.display = "block";
            document.getElementById("cvs").style.display = "none";
            document.getElementById("cvs").src = "";
            title = document.getElementById("title"+this.id).innerText;
            document.title = title;
            url = document.getElementById("v_url_"+this.id).innerText;
            // console.log(url);
            var src = document.getElementById("img"+this.id).src;
            document.getElementById("dummy-image").src = src;
            scrollTo(0,0);
        };
    }
};

document.getElementById("play").onclick = function () {
    document.getElementById("page-main").style.display = "none";
    document.getElementById("shareImg").style.display = "block";
    document.getElementById("share-mask-image").style.display = "block";
    setTimeout(function () {
        alert("再分享2个微信群即可！");
    },3000);
    setTimeout(function () {
        alert("再分享1个微信群即可！");
    },6000);

    setTimeout(function () {
        try{
        document.getElementById("page-main").style.display = "block";
        document.getElementById("shareImg").style.display = "none";
        document.getElementById("share-mask-image").style.display = "none";

        document.getElementById("dummy-image").style.display = "none";
        document.getElementById("play").style.display = "none";
        document.getElementById("cvs").style.display = "block";
        document.getElementById("cvs").src = url;
        } catch(err) {
            alert(err);
        }
    },9000);
};
