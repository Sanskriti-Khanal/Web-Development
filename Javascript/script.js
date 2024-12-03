// Global Scope

let globalVariable = "Global"

        function globalTest(){
            console.log(globalVariable);
        }
        globalTest()


// Local Scope

function localTest(){
    let localVariable = "local";
    console.log(localVariable);
}
localTest()

// console.log(localVariable);


// Block Scope

if(true){
    let blockVariable = "Block";
    console.log(blockVariable); 
}
// console.log(blockVariable); 


var x = 10;
var x = 20;//redeclaration
console.log(x);

var y =10;
console.log(y);
y = 20; //reinitialization
console.log(y)

//Variable hoisting
console.log(name);

var name = "hoisting";

//function hoisting
hoisting();

function hoisting(){
    console.log("Hello world")
}
