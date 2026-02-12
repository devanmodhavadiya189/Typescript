// An intersection type is a way to combine multiple types into a single type that includes 
// all the properties and methods of each constitute type 
// an intersection type is denoted by the & symbol


let rand=(mx:number):number=>
{
    return Math.floor(Math.random()*(mx));
}
let getUUID=():string=>{
    return crypto.randomUUID()
}

let getDate=()=>{
    let start=new Date();
    let newdate = Math.floor(Math.random()*(start.getTime()+1));
    return new Date(newdate);
}

type userinfo={
    firstName:string,
    lastName?:string,
    age : number,
}

type accountinfo={
    accountNo:string,
    createdat : Date,
    Amount:number
}

type user = userinfo & accountinfo; // here created a intersection type which must have to satisfy both types

let u1:user={
    firstName:"Satoshi",
    lastName:"Nakamoto",
    age:rand(61),
    accountNo:getUUID(),
    createdat:getDate(),
    Amount:rand(100000)
}
let u2:user={
    firstName:"John",
    // lastName:"Doe",
    age:rand(61),
    accountNo:getUUID(),
    createdat:getDate(),
    Amount:rand(100000)
}

console.log(u1);
console.log(u2);


/*
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Intersection.ts && bun Intersection.js
{
  firstName: "Satoshi",
  lastName: "Nakamoto",
  age: 15,
  accountNo: "24377c02-5ebf-40a5-beb6-cb9329e8a9c2",
  createdat: 2008-07-01T00:46:42.209Z,
  Amount: 58533,
}
{
  firstName: "John",
  age: 27,
  accountNo: "7af5f9d6-8b16-4158-88c7-e1c9adec1eb4",
  createdat: 2002-06-07T14:07:47.243Z,
  Amount: 89725,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ 
*/