// Type aliases is a way to create a new name for an  existing type .
// it allows you to define a custom type , that refers to another type
// and give it more meaningfull and descriptive name

// type aliases are defined using the type keyword , followed by the name of alias 
// an equal sign(=) , and the type it refers

type person ={
    firstName:string,
    lastName:string,
    Age:Number
}
// Here we are create an alias of a person type object ,
// now insted of every time using this entire Object annotation we just write the alias name
let rand =(mx:number):number =>{
    return Math.floor(Math.random()*(mx));
}
function GiveMePerson():person
{
    let firstName:Array<string> =["Satoshi","John","James","Alice","Bob"];
    let lastName : string[] = ["Nakamoto","Doe","Bond"];
    let RanDomPerson:person={
        firstName:firstName[rand(firstName.length)],
        lastName:lastName[rand(lastName.length)],
        Age:rand(61)
    }
    return RanDomPerson;
}
let newperson:person = GiveMePerson();
console.log(newperson);
console.log(GiveMePerson());



/*

After this much tries we Got the exat combination of Name

cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "Alice",
  lastName: "Doe",
  Age: 45,
}
{
  firstName: "Alice",
  lastName: "Doe",
  Age: 45,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "Alice",
  lastName: "Bond",
  Age: 1,
}
{
  firstName: "Bob",
  lastName: "Bond",
  Age: 0,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "James",
  lastName: "Bond",
  Age: 7,
}
{
  firstName: "Alice",
  lastName: "Bond",
  Age: 1,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "John",
  lastName: "Nakamoto",
  Age: 20,
}
{
  firstName: "John",
  lastName: "Nakamoto",
  Age: 5,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "James",
  lastName: "Bond",
  Age: 54,
}
{
  firstName: "James",
  lastName: "Nakamoto",
  Age: 4,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "Satoshi",
  lastName: "Doe",
  Age: 20,
}
{
  firstName: "John",
  lastName: "Nakamoto",
  Age: 2,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc TypeAlias.ts && bun TypeAlias.js
{
  firstName: "Satoshi",------------------------------
  lastName: "Nakamoto",------------------------------
  Age: 17,
}
{
  firstName: "Bob",
  lastName: "Nakamoto",
  Age: 2,
}
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ 
*/