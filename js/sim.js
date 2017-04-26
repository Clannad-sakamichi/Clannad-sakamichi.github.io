/**
 * Created by sakamichi on 2017/4/26.
 */
$(document).ready(function() {
    var purple = 0.0413;
    var blue = 0.412;
    var count = 0;

    $("#card").click(function(){
        var rand;
        var t = 0.205;
        var y = 0.096;
        if (count == 9) {
            count = 0;
            rand = Math.random();
            if (rand < t) {
                //up内武器
                $("#result").html(function(i,origText){
                    return origText + "保底up内武器<br\>";
                });
                //out.append("\n保底up内武器\n");
                //rt.getWeapon(true,4);
            }
            else if (rand < (t + 3 * y)) {
                //up内圣痕
                $("#result").html(function(i,origText){
                    return origText + "保底up内圣痕<br\>";
                });
                //out.append("\n保底up内圣痕\n");
            }
            else {
                //up外
                $("#result").html(function(i,origText){
                    return origText + "保底up外<br\>";
                });
                //out.append("\n保底up外\n");
            }
            return;
        }
        rand = Math.random();
        if (rand <= purple) {
            //保底外
            count = 0;
            rand = Math.random();
            if (rand < t) {
                //up内武器
                $("#result").html(function(i,origText){
                    return origText + "非保底up内武器<br\>";
                });
                //out.append("\n非保底up内武器\n");
            }
            else if (rand < (t + 3 * y)) {
                //up内圣痕
                $("#result").html(function(i,origText){
                    return origText + "非保底up内圣痕<br\>";
                });
                //out.append("\n非保底up内圣痕\n");
            }
            else {
                //up外
                $("#result").html(function(i,origText){
                    return origText + "非保底up外<br\>";
                });
                //out.append("\n非保底up外\n");
            }
        }
        else if (rand <= ( blue + purple)) {
            //出三星
            count++;
            $("#result").html(function(i,origText){
                return origText + "三星 ";
            });
            //out.append("三星 ");
        }
        else {
            //出二星
            count++;
            $("#result").html(function(i,origText){
                return origText + "二星 ";
            });
            //out.append("二星 ");
        }
    });
});
