// in the syntax of function we can do like this ():type function
// Ex :

function squre(a:number ):number
{
    return a*a;
}
// in squre function we are dfined a type we can assign multiple types using OR Operator etc....
// Normally 
let a:number = squre(10);
console.log(a);
// let's make a function which return any datatype
function checkage(a:number)
{
    if(a>10) return a;
    return "Number is smaller than 10";
}

let b=checkage(11); // here assigned type to b  is string | number if we assign other type later then it gives error , this type assigning is infering

b="abcd";
b=20;
b=checkage(5);
// b=false;  // This will an error Due to taken type is string | Number

// Now let's Move on the arrow function
// Now here b has two type and double function accept only number This gives error 
// but if last assigned value is number then it not give error , 
// if last assigned value is string or coming from a function which is not sure number or string which gives error
let double=(a:number) : number=>{
    return a*2;
}
// b=double(b);// Here  we got error because last b was assigned by a function call which may return number or string , but if a function has only one return type then this will not give erroe

    