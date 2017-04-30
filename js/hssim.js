/**
 * Created by sakamichi on 2017/4/27.
 */
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

    var ex= new Array();
    ex[0]=93;
    ex[1]=80;
    ex[2]=25;
    ex[3]=19;

    $("#duel").click(function(){
        getRandom();//开一包
    });



    function getRandom() {
        var rand;//随机量
        var total;                  //累计次数
        var pack=0;
        var hasRare = false;
        count++;

        $("#show").empty();
        $("#count").html(function(i,origText){
            return parseInt(origText)+1;
        });
        while(pack++<5) {
            if (count == 40) {           //触发保底
                count = 0;
                rand = Math.random();
                if(rand<=golden_in_legend){
                    $("#result").html(function (i, origText) {
                        return origText + "<b>金色传说</b> ";
                    });
                    $("#legend").html(function(i,origText){
                        return parseInt(origText)+1;
                    });
                }else {
                    $("#result").html(function (i, origText) {
                        return origText + "<b>传说</b> ";
                    });
                    $("#legend").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                }
                rand=parseInt((Math.random()*100)%100);
                while(rand>ex[3]) rand=parseInt((Math.random()*100)%100);
                createVideo("img/hs/golden/EX_legend/"+rand+".webm");
                hasRare=true;
                continue;
            }
            rand = Math.random();
            if (rand <= legend) {
                //传说
                count = 0;
                rand = Math.random();
                if(rand<=golden_in_legend){//判断是否金色，下同
                    $("#result").html(function (i, origText) {
                        return origText + "<b>金色传说</b> ";
                    });
                    $("#legend").html(function(i,origText){
                        return parseInt(origText)+1;
                    });
                }else {
                    $("#result").html(function (i, origText) {
                        return origText + "<b>传说</b> ";
                    });
                    $("#legend").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                }
                rand=parseInt((Math.random()*100)%100);
                while(rand>ex[3]) rand=parseInt((Math.random()*100)%100);
                createVideo("img/hs/golden/EX_legend/"+rand+".webm");
                hasRare=true;
            }
            else if (rand <= ( legend + epic)) {
                //史诗
                rand = Math.random();
                if (rand <= golden_in_epic) {
                    $("#result").html(function (i, origText) {
                        return origText + "<b>金色史诗</b> ";
                    });
                    $("#epic").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                } else {
                    $("#result").html(function (i, origText) {
                        return origText + "<b>史诗</b> ";
                    });
                    $("#epic").html(function (i, origText) {
                        return parseInt(origText) + 1;
                    });
                }
                rand=parseInt((Math.random()*100)%100);
                while(rand>ex[2]) rand=parseInt((Math.random()*100)%100);
                createVideo("img/hs/golden/EX_epic/"+rand+".webm");
                hasRare=true;
            }
            else if (rand <= ( legend + epic + rare)){
                //稀有
                rand = Math.random();
                if (rand <= golden_in_rare) {
                    $("#result").html(function (i, origText) {
                        return origText + "金色稀有 ";
                    });
                }else {
                    $("#result").html(function (i, origText) {
                        return origText + "稀有 ";
                    });
                }
                rand=parseInt((Math.random()*100)%100);
                while(rand>ex[1]) rand=parseInt((Math.random()*100)%100);
                createVideo("img/hs/golden/EX_rare/"+rand+".webm");
                hasRare=true;
            }
            else {
                //普通
                rand = Math.random();
                if(pack==5&&!hasRare){//触发一包保底
                    //强制稀有
                    if (rand <= golden_in_rare) {
                        $("#result").html(function (i, origText) {
                            return origText + "金色稀有 ";
                        });
                    }else {
                        $("#result").html(function (i, origText) {
                            return origText + "稀有 ";
                        });
                    }
                    rand=parseInt((Math.random()*100)%100);
                    while(rand>ex[1]) rand=parseInt((Math.random()*100)%100);
                    createVideo("img/hs/golden/EX_rare/"+rand+".webm");
                    continue;
                }

                if (rand <= golden_in_common) {
                    $("#result").html(function (i, origText) {
                        return origText + "金色普通 ";
                    });
                }else {
                    $("#result").html(function (i, origText) {
                        return origText + "普通 ";
                    });
                }
                rand=parseInt((Math.random()*100)%100);
                while(rand>ex[0]) rand=parseInt((Math.random()*100)%100);
                createVideo("img/hs/golden/EX_common/"+rand+".webm");
            }
        }
        $("#result").html(function (i, origText) {
            return origText + "<br\>";//换行
        });
    }

    function createVideo(url)
    {
        var v = document.createElement("video");
        v.autoplay="autoplay";
        v.loop="loop";
        $("#show").append(v);
        var s = document.createElement("source");
        s.src=url;
        v.appendChild(s);
    }
});
