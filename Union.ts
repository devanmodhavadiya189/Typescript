// Union is used to declare a type that can have one of several 
// possible types . Unions are usefull when we want to allow a variable 
// or parameter to accept multiple types

// The syntax of defining a union type is uses the pipe symbol( | ) 

let a : (number | string) =10
a="Devan"

let rand=(maxi:number):number=>
{
    return Math.floor(Math.random()*(maxi+1));
}

let giveDate = ():Date=>
{
    let mx= new Date().getTime();
    let mi=new Date("2006-05-04").getTime();
    let temp = Math.floor(Math.random()*(mx-mi+1)+mi);
    return new Date(temp);
}

let giveuuid = ():string=>{
    return crypto.randomUUID();
}

type userinfo={
    firstName:string,
    lastName?:string,
    age:number,
    dob:Date
}
type accountinfo={
    accountNo:string,
    createdat:Date,
    amount:number
}
let user1:userinfo | accountinfo={
    firstName:"Satoshi",
    lastName:"Nakamoto",
    age:rand(60),
    dob:giveDate(),
    accountNo:giveuuid()
}

console.log(user1);


/*
cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Union.ts && bun Union.js
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Union.ts && bun Union.js
{
  firstName: "Satoshi",
  lastName: "Nakamoto",
  age: 55,
  dob: 2013-06-21T21:23:22.469Z,
  accountNo: "86bb2590-72ef-4178-ac7e-9549169cb768",
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Union.ts && bun Union.js
{
  firstName: "Satoshi",
  lastName: "Nakamoto",
  age: 48,
  dob: 2012-10-26T06:31:28.172Z,
  accountNo: "8a90976c-c5dd-4a37-b7f3-aeeb2eba591c",
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Union.ts && bun Union.js
{
  firstName: "Satoshi",
  lastName: "Nakamoto",
  age: 38,
  dob: 2021-09-07T05:43:46.493Z,
  accountNo: "f349eeb4-f2cf-4c35-9813-65663cc6eae6",
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Union.ts && bun Union.js
{
  firstName: "Satoshi",
  lastName: "Nakamoto",
  age: 5,
  dob: 2009-04-11T23:06:27.637Z,
  accountNo: "73992461-7f8f-4963-9fc0-b10c2906a4f6",
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ 
*/