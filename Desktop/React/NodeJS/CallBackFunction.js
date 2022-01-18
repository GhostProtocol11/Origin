// const FunA = () => {
//     setTimeout(function(){
//         console.log(`function FunA`);
//         FunB();
//     },  3000);
// } 

// const FunB = () => {
//     console.log(`function FunB`);
// } 

// FunA();


// const PerOne = (friend, callfriend) => {
//     console.log(`I am busy right now .I am talking to ${friend}. I will call you back.`);
//     callfriend();
// }

// const Pertwo = () => {
//     console.log(`hey what's up.I told you i'll call you back.`)
// }

// PerOne("Arslan", Pertwo);


const  PersonOne = (NodeJS, Execute) => {
    setTimeout(function(){
        console.log(`It will take some time to reload ${NodeJS}.I'll show you when its done.`);
    Execute();
    }, 3000); 
}

const  PersonTwo =  () => {
    console.log(`It's Done Loading, Here Is My Response.`)
}

const PersonThree = (Error, Execute2) => {
    setTimeout(function(){
        console.log(`NodeJS Started. ${Error} `);
    Execute2();
    },3000);
}

const PersonFour  =  () => {
    console.log(`No Error's Found.`)
}


PersonOne("NodeJS", PersonTwo);
PersonThree("Checking For Errors....................", PersonFour);




// const Add1 = () => {
//     console.log(``)
// }
