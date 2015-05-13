function peakdet(data, delta){
    //console.log("data is " + data)
    //console.log("delta is " + delta)

    var peaks = [];
    var valleys = [];

    var min = Infinity;
    var max = -Infinity;
    var minPosition = Number.NaN;
    var maxPosition = Number.NaN;

    var lookForMax = true;

    var current;
    // var dbg = [];
    for(var i=0; i < data.length; i++){
        current = parseFloat(data[i]);
        if (isNaN(current) || !isFinite(current)) {
          alert("Item that's not a number!");
          break;
        }
        if (current > max){
            max = current;
            maxPosition = i;
        }
        if (current < min){
            min = current;
            minPosition = i;
        }
        /*
        dbg.push(
          "looking for max," + lookForMax + ",current," + current + ",pos," +
          i + ",min," + min + ",max," + max + ",delta," + delta + "<br>")
        */

        if (lookForMax){
            if (current < max - delta){
                peaks.push({ "position" : maxPosition, "value" : max});
                min = current;
                minPosition = i;
                lookForMax = false;
            }
        }
        else {
            if (current > min + delta) {
                valleys.push({"position" : minPosition, "value" : min});
                max = current;
                maxPosition = i;
                lookForMax = true;
            }
        }
    }
    return {"peaks" : peaks, "valleys" : valleys};
}
