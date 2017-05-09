/**
 * Created by sakamichi on 2017/4/26.
 */
$(document).ready(function() {
    //概率
    /*
    var legend = 0.0101;
    var epic = 0.0427;
    var rare = 0.2287;*/
    var over_epic = 0.05;
    var over_rare = 0.225;

    var golden_in_legend = 0.0731;
    var golden_in_epic = 0.0452;
    var golden_in_rare = 0.0554;
    var golden_in_common = 0.0206;

    var count = 0;//计算保底
    var tdCount = 0;//计算是否需要换行

    var EX = new Array();
    EX[0]=93;
    EX[1]=80;
    EX[2]=25;
    EX[3]=19;

    var OG = new Array();
    OG[0]=49;
    OG[1]=35;
    OG[2]=26;
    OG[3]=20;

    var CFM = new Array();
    CFM[0]=47;
    CFM[1]=34;
    CFM[2]=25;
    CFM[3]=18;

    var UNG = new Array();
    UNG[0]=48;
    UNG[1]=35;
    UNG[2]=26;
    UNG[3]=22;

    var pack_check = "EX";
    var arr=EX;

    $("#duel").click(function(){
        getRandom();//开一包
    });

    $("#CFM").click(function(){
        alert("更换卡包会导致累计显示清空");
        clear();
        pack_check="CFM";
        arr=CFM;
    });
    $("#OG").click(function(){
        alert("更换卡包会导致累计显示清空");
        clear();
        pack_check="OG";
        arr=OG;
    });
    $("#UNG").click(function(){
        alert("更换卡包会导致累计显示清空");
        clear();
        pack_check="UNG";
        arr=UNG;
    });
    $("#EX").click(function(){
        alert("更换卡包会导致累计显示清空");
        clear();
        pack_check="EX";
        arr=EX;
    });



    function getRandom() {
        var rand;//随机量
        var pack=0;
        var hasRare = false;
        count++;

        $("#show").empty();         //清空显示
        $("#count").html(function(i,origText){
            return parseInt(origText)+1;
        });
        while(pack++<5) {
            rand = Math.random();
            if (rand <= getPro(count/4)) {
                //传说
                count = 0;
                rand = Math.random();
                if(rand<=golden_in_legend){//判断是否金色，下同
                    //金色传说
                    $("#legend").html(function(i,origText){
                        return parseInt(origText)+1;
                    });
                    setDust(1600);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm");
                    createVidSta("img/golden/"+pack_check+"_legend/"+rand+".webm");
                }else {
                    //传说
                    $("#legend").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    setDust(400);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_legend/"+rand+".png");
                    createPicSta("img/common/"+pack_check+"_legend/"+rand+".png");
                }
                hasRare=true;
            }
            else if (rand <= over_epic) {
                //史诗
                rand = Math.random();
                if (rand <= golden_in_epic) {
                    //金色史诗
                    $("#epic").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    setDust(400);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[2]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_epic/"+rand+".webm");
                    createVidSta("img/golden/"+pack_check+"_epic/"+rand+".webm");
                } else {
                    //史诗
                    $("#epic").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    setDust(100);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[2]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_epic/"+rand+".png");
                    createPicSta("img/common/"+pack_check+"_epic/"+rand+".png");
                }
                hasRare=true;
            }
            else if (rand <= over_rare){
                //稀有
                rand = Math.random();
                if (rand <= golden_in_rare) {
                    //金色稀有
                    setDust(100);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_rare/"+rand+".webm");
                }else {
                    //稀有
                    setDust(20);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_rare/"+rand+".png");
                }
                hasRare=true;
            }
            else {
                //普通
                rand = Math.random();
                if(pack==5&&!hasRare){//触发一包保底
                    //强制稀有
                    if (rand <= golden_in_rare) {
                        //金色稀有
                        setDust(100);
                        rand=parseInt((Math.random()*100)%100);
                        while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                        createVideo("img/golden/"+pack_check+"_rare/"+rand+".webm");
                    }else {
                        //稀有
                        setDust(20);
                        rand=parseInt((Math.random()*100)%100);
                        while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                        createPicture("img/common/"+pack_check+"_rare/"+rand+".png");
                    }
                    continue;
                }

                if (rand <= golden_in_common) {
                    //金色普通
                    setDust(50);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[0]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_common/"+rand+".webm");
                }else {
                    //普通
                    setDust(5);
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_common/"+rand+".png");
                }
            }
        }
    }

    function getPro(count){
        switch (parseInt(count)){
            case 0://0
                return 0.0065;
            case 1://4
                return 0.007;
            case 2://8
                return 0.0075;
            case 3://12
                return 0.008;
            case 4://16
                return 0.0085;
            case 5://20
                return 0.009;
            case 6://24
                return 0.0095;
            case 7://28
                return 0.01;
            case 8://32
                return 0.02;
            case 9://36
                return 0.08;
            default:
                return 1;
        }
    }

    function createVideo(url)
    {
        var t = document.createElement("td");
        t.className="block3";
        $("#show").append(t);
        var v = document.createElement("video");
        v.autoplay="autoplay";
        v.loop="loop";
        v.className="img-responsive";
        /*
        v.style.width=parseFloat($(window).width())/11+"px";
        v.onmouseover=function (){
            this.style.width=parseFloat($(window).width())/8+"px";
        };
        v.onmouseout=function (){
            this.style.width=parseFloat($(window).width())/11+"px";
        };*/
        //$(id).append(v);
        var s = document.createElement("source");
        s.src=url;
        s.alt="加载失败";
        s.type="video/webm";
        v.appendChild(s);
        t.appendChild(v);
    }

    function createPicture(url)
    {
        var t = document.createElement("td");
        t.className="block3";
        var s = document.createElement("img");
        s.srcset=url;
        s.alt="加载失败";
        s.className="img-responsive";
        /*
        s.style.width=parseFloat($(window).width())/11+"px";
        s.onmouseover=function (){
            this.style.width=parseFloat($(window).width())/8+"px";
        };
        s.onmouseout=function (){
            this.style.width="120px";
        };*/
        //$(id).append(s);
        t.appendChild(s);
        $("#show").append(t);
    }

    function createPicSta(url) {
        if(tdCount%5==0){
            $("#statistics").append(document.createElement("tr"));
        }
        tdCount++;
        var t = document.createElement("td");
        t.className="block3";
        var s = document.createElement("img");
        s.srcset=url;
        s.alt="加载失败";
        s.className="img-responsive";
        t.appendChild(s);
        $("#statistics").append(t);
    }

    function createVidSta(url) {
        if(tdCount%5==0){
            $("#statistics").append(document.createElement("tr"));
        }
        tdCount++;
        var t = document.createElement("td");
        t.className="block3";
        $("#statistics").append(t);
        var v = document.createElement("video");
        v.autoplay="autoplay";
        v.loop="loop";
        v.className="img-responsive";
        var s = document.createElement("source");
        s.src=url;
        s.alt="加载失败";
        s.type="video/webm";
        v.appendChild(s);
        t.appendChild(v);
    }

    function setDust(dust) {
        $("#dust").html(function (i, origText) {
            return parseInt(origText) + dust;
        });
    }

    function clear() {
        count=0;
        tdCount=0;
        $("#show").empty();         //清空显示
        $("#statistics").empty();

        $("#count").html("0");
        $("#legend").html("0");
        $("#epic").html("0");
        $("#dust").html("0");
        
    }
});
