exports.sum = function(a){
       var i = 0;
       for(j = 0;j < a.length; j++){
           i += a[j];
       } 
       return i; 
}
exports.odds = function(a){
    var array_odd=[];
    var indx = 0;
    for(j = 0;j < a.length;j++){
        if(a[j] % 2 != 0){
            array_odd.push(a[j]);
            indx++;
        }
    }
    return array_odd;
}
exports.find = function(a, function_v){
        for(j=0; j< a.length; j++){
            if(function_v(a[j])){
                return 50;
            }
        }
}