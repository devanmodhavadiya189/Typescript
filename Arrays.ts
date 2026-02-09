// arrays are the type of object that can store the multiple value of same type
// arrays in TS are typed , which means we can specify the type of value that can 
// array holds

// 2 Type to create array

//using the squre bracket notation [] to indicate an array
//using generic Array<type> notation to indicate an array of a specifig type

let items : number[]=[1,2,3]; // Which means array can hold number only

items.push(10);
console.log(items);

// What if we want multiple types alloweded

let itemlist : (number | string)[]=[];
itemlist.push("This is a string")
itemlist.push(10);
// itemlist.push(true) // This will give error
type ItemObject={
    "Name":number,
    5:string
}
let list:(number| ItemObject)[]=[{"Name":123,5:"Devan"},1];
console.log(typeof(list))
console.log(typeof(typeof(list)));
console.log(typeof(list[1]))

// Other method to decalre array

let newlist : Array<number> =[1,2,3];
console.log(newlist)
// newlist.push("This is a string") // This will give an error
console.log(typeof(newlist));