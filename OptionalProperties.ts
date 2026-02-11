//Optional Properties

//  we can make a certain property optional in a Object
// By adding a question mark ( ? ) after the property name

// if we have a Object type of a person with name , age , email properties
// But we want to make email property optonal 
// we can do that by addin the question mark key?:type


// readonly property once we set we cannot modify that 
// readonly key : value
// later we cannot do like myobject.key=something , if key is defined as read only this will give error

const rand = (maxi : number) : number =>
{
    return Math.floor(Math.random()*maxi);
}

type person= {
    age:number,
    firstname:string,
    lastname:string,
    email?:string
    readonly location ?: string
}

// here we make a email as a optional property which location as a readonly

type person2={
    firstName:string,
    lastName?:string,
    MobileNumber1:number,
    MobileNumber2?:number
}

let user1:person={
    age :rand(61),
    firstname:"Satoshi",
    lastname:"Nakamoto",
    email:"satoshinakamoto@bitcoin.com",
    location:"Porbandar"
}
//if read only property is optional then we can assign while creating only

let user2:person={
    firstname:"John",
    lastname:"Doe",
    age:rand(21),
}
console.log(user1);
console.log(user2); // here we are not assigned location to user 2
// user1.location="Earth" // This will Give erroe we cannot assign value to read only peroprty althogh we made it optional

let user3:person2={
    firstName:"alice",
    MobileNumber1:993994214
}
let user4:person2={
    firstName:"Bob",
    lastName:"Unknown",
    MobileNumber1:9929475180,
    MobileNumber2:8259091785
}
console.log(user3);
console.log(user4);