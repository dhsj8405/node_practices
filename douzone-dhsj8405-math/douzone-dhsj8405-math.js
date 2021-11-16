module.exports ={
    sum: function(){
        var sum = 0;    

        Array.from(arguments).forEach(function(e){      //유사배열을 배열처럼 만들어줌
            sum += e;
        }) 
        return sum;
    },
    max: function(){
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });

        return max;
    },
    min: function(){
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(e=> {
             min = e < min ? e : min;
        });

        return min;
    }
}