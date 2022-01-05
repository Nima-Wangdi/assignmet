// console.log("FIRST STATEMENT")

// // Inbuilt callback function
// setTimeout( () => {
//     console.log("INSIDE SET TIMEOUT") 
// },10000)

//console.log("SECOND STATEMENT")


//CALLBACK HELL
setTimeout(()=>{
    console.log("FIRST CALLBACK");
    setTimeout(()=>{
        console.log("SECOND CALLBACK");
        setTimeout(()=>{
            console.log("THIRD CALLBACK");
            setTimeout(()=>{
                console.log("FOURTH CALLBACK");
                setTimeout(()=>{
                    console.log("FIFTH CALLBACK");
                },2000)
            },2000)
        },2000)
    },2000)
},2000)