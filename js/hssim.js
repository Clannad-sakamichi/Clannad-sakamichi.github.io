/**
 * Created by sakamichi on 2017/4/26.
 */
$(document).ready(function() {
    //概率
    var legend = 0.0101;
    var epic = 0.0427;
    var rare = 0.2287;

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

    $("#duel").click(function(){
        var pack = document.getElementsByName("pack");
        for(var i=0; i<pack.length; i ++){
            if(pack[i].checked){
                if(pack[i].value!=pack_check){
                    alert("更换卡包会导致累计显示清空");
                    clear();
                    pack_check=pack[i].value;
                }
                 switch(pack[i].value){
                     case "EX":
                         getRandom(EX);//开一包
                         break;
                     case "OG":
                         getRandom(OG);//开一包
                         break;
                     case "CFM":
                         getRandom(CFM);//开一包
                         break;
                     case "UNG":
                         getRandom(UNG);//开一包
                         break;
                     default:
                         alert("error");
                         break;
                 }
            }
        }
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
            if (count == 40) {           //触发保底
                count = 0;
                rand = Math.random();
                if(rand<=golden_in_legend){
                    /*$("#result").html(function (i, origText) {
                        return origText + "<b>金色传说</b> ";
                    });*/
                    $("#legend").html(function(i,origText){
                        return parseInt(origText)+1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm","#show");
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm","#statistics");
                }else {
                    /*$("#result").html(function (i, origText) {
                        return origText + "<b>传说</b> ";
                    });*/
                    $("#legend").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_legend/"+rand+".png","#show");
                    createPicture("img/common/"+pack_check+"_legend/"+rand+".png","#statistics");
                }
                hasRare=true;
                continue;
            }
            rand = Math.random();
            if (rand <= legend) {
                //传说
                count = 0;
                rand = Math.random();
                if(rand<=golden_in_legend){//判断是否金色，下同
                    /*$("#result").html(function (i, origText) {
                        return origText + "<b>金色传说</b> ";
                    });*/
                    $("#legend").html(function(i,origText){
                        return parseInt(origText)+1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[3]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm","#show");
                    createVideo("img/golden/"+pack_check+"_legend/"+rand+".webm","#statistics");
                }else {
                    /*$("#result").html(function (i, origText) {
                        return origText + "<b>传说</b> ";
                    });*/
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
            else if (rand <= ( legend + epic)) {
                //史诗
                rand = Math.random();
                if (rand <= golden_in_epic) {
                   /* $("#result").html(function (i, origText) {
                        return origText + "<b>金色史诗</b> ";
                    });*/
                    $("#epic").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[2]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_epic/"+rand+".webm","#show");
                    createVideo("img/golden/"+pack_check+"_epic/"+rand+".webm","#statistics");
                } else {
                    /*$("#result").html(function (i, origText) {
                        return origText + "<b>史诗</b> ";
                    });*/
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
            else if (rand <= ( legend + epic + rare)){
                //稀有
                rand = Math.random();
                if (rand <= golden_in_rare) {
                    /*$("#result").html(function (i, origText) {
                        return origText + "金色稀有 ";
                    });*/
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_rare/"+rand+".webm","#show");
                }else {
                    /*$("#result").html(function (i, origText) {
                        return origText + "稀有 ";
                    });*/
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
                       /* $("#result").html(function (i, origText) {
                            return origText + "金色稀有 ";
                        });*/
                        rand=parseInt((Math.random()*100)%100);
                        while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                        createVideo("img/golden/"+pack_check+"_rare/"+rand+".webm","#show");
                    }else {
                       /* $("#result").html(function (i, origText) {
                            return origText + "稀有 ";
                        });*/
                        rand=parseInt((Math.random()*100)%100);
                        while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                        createPicture("img/common/"+pack_check+"_rare/"+rand+".png","#show");
                    }
                    continue;
                }

                if (rand <= golden_in_common) {
                    /*$("#result").html(function (i, origText) {
                        return origText + "金色普通 ";
                    });*/
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[0]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/golden/"+pack_check+"_common/"+rand+".webm","#show");
                }else {
                    /*$("#result").html(function (i, origText) {
                        return origText + "普通 ";
                    });*/
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>arr[1]) rand=parseInt((Math.random()*100)%100);
                    createPicture("img/common/"+pack_check+"_common/"+rand+".png","#show");
                }
            }
        }
        /*$("#result").html(function (i, origText) {
            return origText + "<br\>";//换行
        });*/
    }

    function createVideo(url,id)
    {
        var v = document.createElement("video");
        v.autoplay="autoplay";
        v.loop="loop";
        $(id).append(v);
        var s = document.createElement("source");
        s.src=url;
        s.type="video/webm";
        v.appendChild(s);
    }

    function createPicture(url,id)
    {
        var v = document.createElement("picture");
        $(id).append(v);
        var s = document.createElement("img");
        s.srcset=url;
        v.appendChild(s);
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
