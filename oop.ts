// Class properties annotation
//You can annotate class property with type. This allows you to 
//define the data type of the property and ensure that it is always
//consistent 

class person {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age;
    }
}

let p: person = new person("Satoshi", 61)
console.log(p);


//Access Modifiers 
/*
In TS you can use access modifier to control the visibility 
of class members . Access modifiers determines the  ways in which class members can be accessed 
from within and outside the class

Three Type of acess modifier in TS
PUBLIC
PRIVATE
PROTECTED


public : members marked as public can be accessed from anywhere , both inside and outside the class

private : members marked as private can only be accessde from within the class they are defined in

Protected : members marked as protected can be accessed from within the class they are defined as well as many subclass that exted the class
*/

/*
in javascript, when you use extends, you are creating a derived class. 
the most important rule here is that the child class cannot create 
its own "this" object—it actually relies on the parent class to do that. 
when you write a constructor in the child class, you must call super() 
before you try to use any property or method with "this". 
if you skip this call or try to set a value before it, 
the engine will throw a referenceerror because the object hasn't been initialized yet. 
essentially, super() is the trigger that tells the parent to build the base of the 
object so the child can then add its own extra details. 
without it, the child simply has no foundation to stand on. 

*/
function getaccno():string
{
    return crypto.randomUUID();
}
class Person{
    public firstname:string;
    public lastname:string;

    constructor(firstname:string,lastname:string)
    {
        this.firstname=firstname
        this.lastname=lastname;
    }
    private getAge=():number=>{
        let mi=0;
        let mx=60;
        return Math.floor(Math.random()*(mx-mi+1)+mi);
    }
    private accountno:string=getaccno();
    protected age:number=this.getAge();
}

/*
In TypeScript (and JavaScript), you cannot put executable statements—like 
changing a variable's value—floating freely inside the main body of a class. 
The class body is strictly for declaring things (like properties, methods, and the constructor). 
*/
class Builder extends Person{
    // here we not write like "function" name() keyword
    private getDOB(age:number):Date
    {
        let today:Date = new Date();
        today.setFullYear(today.getFullYear()-age);
        return today;
    }
    constructor(fname:string,lname:string)
    {
        super(fname,lname);
    }
    // this.age=20; this will give error
    private setage() // by default this is public
    {
        this.age=18;
    }
    // insted of direct assignme in class body we use a methos
}
let satoshi = new Builder("Satoshi" , "Nakamoto");
console.log(satoshi)
console.log(satoshi.firstname) // access because public other protected and privae gave error here

// SO in this case age assign ment in paernt class is inside the class body but that not give error , because that is the initial declaration this is ok
// But again declaration or assign a value of alredy declared proprty in side the calss body is not allowded
