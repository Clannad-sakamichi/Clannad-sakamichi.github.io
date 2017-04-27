/**
 * Created by sakamichi on 2017/4/26.
 */
$(document).ready(function() {
    var purple = 0.0413;//四星总期望
    var blue = 0.412;//三星期望
    var count = 0;//计算保底

    $("#card").click(function(){
       getRandom();
    });

    $("#ten").click(function () {
        var i=0;
        while (i++<10)getRandom();
    });

    function getRandom() {
        var rand;//随机量
        var t = 0.205;              //武器常数值
        var y = 0.096;              //圣痕常数值
        var total;                  //累计次数
        var pic;                    //决定展示的图片
        $("#count").html(function(i,origText){
            total=parseInt(origText)+1;//获取累计次数并累计一次
            return total;
        });
        $("#diamond").html(function(i,origText){
            return parseInt(origText)+280;
        });
        $("#price").html(function(i,origText){
            return parseFloat(origText)+22.4;
        });
        if(total%10==1&&total!=1){            //清空图片显示
            for(var i=0;i<10;i++){
                $("#"+i).attr("srcset","").html();
            }
        }
        if (count == 9) {           //触发保底
            count = 0;
            rand = Math.random();
            if (rand < t) {
                //up内武器
                $("#result").html(function(i,origText){
                    return origText + "保底up内武器<br\>";
                });
            }
            else if (rand < (t + 3 * y)) {
                //up内圣痕
                $("#result").html(function(i,origText){
                    return origText + "保底up内圣痕<br\>";
                });
            }
            else {
                //up外
                $("#result").html(function(i,origText){
                    return origText + "保底up外<br\>";
                });
            }
            $("#"+total%10).attr("srcset","img/4.jpg").html();
            $("#purple").html(function(i,origText){
                return parseInt(origText)+1;
            });
            return;
        }
        rand = Math.random();
        if (rand <= purple) {
            //保底外
            //$("#"+total%10).attr("srcset","img/1.gif").html();
            pic=4;
            count = 0;
            rand = Math.random();
            if (rand < t) {
                //up内武器
                $("#result").html(function(i,origText){
                    return origText + "非保底up内武器<br\>";
                });
            }
            else if (rand < (t + 3 * y)) {
                //up内圣痕
                $("#result").html(function(i,origText){
                    return origText + "非保底up内圣痕<br\>";
                });
            }
            else {
                //up外
                $("#result").html(function(i,origText){
                    return origText + "非保底up外<br\>";
                });
            }
            $("#purple").html(function(i,origText){
                return parseInt(origText)+1;
            });
        }
        else if (rand <= ( blue + purple)) {
            //出三星
            count++;
            $("#result").html(function(i,origText){
                return origText + "三星 ";
            });
            //$("#"+total%10).attr("srcset","img/3.jpg").html();
            pic=3;
        }
        else {
            //出二星
            count++;
            $("#result").html(function(i,origText){
                return origText + "二星 ";
            });
            //$("#"+total%10).attr("srcset","img/2.jpg").html();
            pic=2;
        }
        $("#"+total%10).attr("srcset","img/"+pic+".jpg").html();
    }
});
