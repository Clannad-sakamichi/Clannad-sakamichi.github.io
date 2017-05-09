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
        getRandom(arr);//开一包
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



    function getRandom(arr) {
        var rand;//随机量
        var total;                  //累计次数
        var pack=0;
        var hasRare = false;
        count++;

        $("#show").empty();         //清空显示
        $("#count").html(function(i,origText){
            return parseInt(origText)+1;
        });
        while(pack++<5) {
            rand = Math.random();
            var pro = getPro(count/4);
            if (rand <= pro) {
                //传说
                count = 0;
                rand = Math.random();
                if(rand<=golden_in_legend){//判断是否金色，下同
                    //金色传说
                    $("#legend").html(function(i,origText){
                        return parseInt(origText)+1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm","#show");
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm","#statistics");
                }else {
                    //传说
                    $("#legend").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_legend/"+rand+".png","#show");
                    createPicture("img/common/"+pack_check+"_legend/"+rand+".png","#statistics");
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
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[2]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_epic/"+rand+".webm","#show");
                    createVideo("img/golden/"+pack_check+"_epic/"+rand+".webm","#statistics");
                } else {
                    //史诗
                    $("#epic").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[2]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_epic/"+rand+".png","#show");
                    createPicture("img/common/"+pack_check+"_epic/"+rand+".png","#statistics");
                }
                hasRare=true;
            }
            else if (rand <= over_rare){
                //稀有
                rand = Math.random();
                if (rand <= golden_in_rare) {
                    //金色稀有
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_rare/"+rand+".webm","#show");
                }else {
                    //稀有
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_rare/"+rand+".png","#show");
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
                        rand=parseInt((Math.random()*100)%100);
                        while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                        createVideo("img/golden/"+pack_check+"_rare/"+rand+".webm","#show");
                    }else {
                        //稀有
                        rand=parseInt((Math.random()*100)%100);
                        while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                        createPicture("img/common/"+pack_check+"_rare/"+rand+".png","#show");
                    }
                    continue;
                }

                if (rand <= golden_in_common) {
                    //金色普通
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[0]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_common/"+rand+".webm","#show");
                }else {
                    //普通
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_common/"+rand+".png","#show");
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

    function createVideo(url,id)
    {
        var v = document.createElement("video");
        v.autoplay="autoplay";
        v.loop="loop";
        v.className="card";
        v.onmouseover=function (){
            this.style.width="190px";
        };
        v.onmouseout=function (){
            this.style.width="120px";
        };
        $(id).append(v);
        var s = document.createElement("source");
        s.src=url;
        s.type="video/webm";
        v.appendChild(s);
    }

    function createPicture(url,id)
    {
        var s = document.createElement("img");
        s.srcset=url;
        s.className="card";
        s.onmouseover=function (){
            this.style.width="190px";
        };
        s.onmouseout=function (){
            this.style.width="120px";
        };
        $(id).append(s);
    }

    function clear() {
        count=0;
        $("#show").empty();         //清空显示
        $("#statistics").empty();

        $("#count").html("0");
        $("#legend").html("0");
        $("#epic").html("0");

    }
});
