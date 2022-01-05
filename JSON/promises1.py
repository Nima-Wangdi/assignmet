var promise=new Promise((resolve, reject) =>{
    var x="Extended Family";
    var y="Extended Family";
    if(x===y){
        resolve("Strings are Equal")
    }
    else{
        reject("Strings are NOt equal")
    }
})

promise.then(function execting(msg){
    console.log(msg)
})