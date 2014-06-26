detectPeaks = function(data, delta){

    var peaks = [],
    valleys = [];

    var min = Infinity,
    max = -Infinity,
    minPosition = Number.NaN,
    maxPosition = Number.NaN;

    var lookForMax = true;

    var current;
    for(var i=0; i < data.length; i++){
        current = data[i];
        if (current > max){
            max = current;
            maxPosition = i;
        }
        if (current < min){
            min = current;
            minPosition = i;
        }

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