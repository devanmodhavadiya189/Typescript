// tuple is a type that represents an array with a fixed number of elements ,
// where each element can have a different type. The order of the types in the tuple
// defination corrsponds to the order of the value in the actual array . Tuples are similar
// to array , but they have a specific strcture and can be used to model finite sequences 
// with known lengths

let items : [string,number,string];
items=["John",20,"Doe"];
// items=["John","Doe",20]; // This will given an error be cause we change the order of number and string
items=["Satoshi",61,"Nakamoto"];
items[0]="satoshi"
console.log(items)

let [firstName,age,lastName]=items // do not forget to put that let before
console.log(firstName)
let product:[string]=["ETH"]
console.log(product)
