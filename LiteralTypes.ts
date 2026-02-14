// Literal Types allow you to specify a value that can only be
// one specific literal value , this means a variable with a 
// literal type can only have one specific value and no other

let color : 'red' | 'yellow' | 'saffron' | 'White' ='White';

console.log(color)

color= 'yellow'

console.log(color)
// let s:string=crypto.randomUUID() 
let accont_no : 1 | 2 | 'devan' =2
accont_no=1;
accont_no='devan'
// accont_no=50 // This line will Give us error , we can assign only value which are specified

console.log(accont_no)