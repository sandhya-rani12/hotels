function callback(){
    console.log("now addition is completed");
}

const add = function(a,b,callback){
    let result = a + b;
    console.log("result is :" +result);
    callback();
}

add(27,2,callback);