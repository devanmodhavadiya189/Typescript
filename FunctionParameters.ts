// Function Parameter annotations in Typescript are used to specify the expected types of the 
//parameters that a function takes
// also if we pass more or less number of parameter than declared then it also gives error in TypeScript

// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2,3));

// This will Not Give in Normal JS but Gives error in TS because we pass 3 parameter and declared is 2 only

function multiply(a:number , b:number) 
{
    return a*b;
}
let num1:number =10;
let num2 : number = 20;
// let res : string = multiply(num1,num2);  This will Give error Because function return the Number Type
let res:number = multiply(num1,num1)
console.log(res);
// Default Parameter Value 

function greet(person : string ="Anonoms")
{
    return `Hello ${person}`
}
console.log(greet("Devan"))
console.log(greet()) 
// Both will work fine , But if not Default parameter value assigned then empty call will give an error
