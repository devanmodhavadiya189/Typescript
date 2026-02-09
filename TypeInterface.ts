// TypeInterface is a feature in Typescript that allows the compiler to automatically determine the 
// the type of a variable based on its values . in Other words , if you declare a variable without explicitly specifying it's type,
// TypeScript will try to infer the type based on the value you assign to it.

let var1="Devan"
// Here we are not declaring the type , But Not getting error Because of infering
// The Thing is that First time assigning assume that type , here automatic assume the type is string
// So if we assign other type then it gives the error
console.log(var1);
console.log(typeof(var1))