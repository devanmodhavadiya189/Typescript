//NEVER
//The never keyword is used to indicate that a function will not return anything
//or that a variable can never have a value
// The never type is useful for indicating that certain 
// codepaths should never be reached or that certain values are impossible
// it can help catch error at compile time insted of runtime
// Keep in mind that This is different from void

//never is useful here :

// a function that alwys throw an error
// a function that has an infinite loop
// a variable that can never have a value

let x:never

function throwerror():never{
    throw new Error("This is an error");
}
try
{
    throwerror();
}
catch(e)
{
    console.log("Something is happeing unsusual",e)
}
console.log("Message after error")

function infiniteloop():never
{
    while(true){}
}
