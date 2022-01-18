// // const os=require('os');
// // console.log(os.arch());
// // console.log(os.freemem());
// // console.log(os.totalmem());
// // console.log(os.hostname());
// // console.log(os.platform());
// // console.log(os.cpus());
// // console.log(os.uptime());
// // console.log(os.version());
// // console.log(os.release());
// // console.log(os.userInfo());
// // console.log(os.networkInterfaces());
// // if (os.freemem < 344) {
// //     console.log("You Don Not Have Enough Free Memory, Now You Can Run/Install 20 More Applications");
// // } else {
// //     console.log("You Have Enough Free Memory, Now You Can Run/Install 20 More Applications")
// // };

// const add= () => {
    
//     x=15;
//     y=25;
//     z=x+y;
//     console.log(z);
// }
// const sub= () => {
//     x=25;
//     y=15;
//     z=x-y;
//     console.log(z);
// }
// const multiply = () => {
//     x=25;
//     y=1999889;
//     z=x*y;
//     console.log(z);
// }
// local={
//     add,
//     sub,
//     multiply,
// }

// module.exports=local;

const local= require('./NodeModule.js');
console.log(local.info());