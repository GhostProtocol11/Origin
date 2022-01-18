function info(info){
    console.log(" this site is belongs to google. " +info);
}
info("Taha");
info1= function (info1){
    console.log(" This is module1. " +info1);
}
info1("Google");
info2=(info2)=>{
    console.log("Hello This Is Windows. "+info2)
}
info2('Ahmed')
local={
    info,
    info1,
    info2,
}
module.exports=local;