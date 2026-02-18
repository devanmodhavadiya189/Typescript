// Class properties annotation
//You can annotate class property with type. This allows you to 
//define the data type of the property and ensure that it is always
//consistent 

class person{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age;
    }
}

let p:person=new person("Satoshi",61)
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

