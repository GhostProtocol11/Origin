// exports.add=function(x,y){
//     return x+y;
// }
// exports.sub=function(x,y){
//     return x-y;
// }
// exports.multi=function(x,y){
//     return x*y;
// }
// exports.div=function(x,y){
//     return x/y;
// }           

function greatest(a,b,c){
    if (a>=b && a>=c) {
        return a;
    } else if (b>=c && b>=a) {
        return b;
    }else{
        return c;
        
    }
}

exports.numberGreatest=function(){
    return greatest(13,15,60);
}