// Objects
//An Object in Ts is a strctured Datatype that represents a collection of properties , each with a key and an associated value
// The Property of an object can have an specific types , and the object itself can  be annotated with a type,
// often defined using an interface or a type alias, TS uses strctural typing , meaning that the shape of an object (its strcture   or 
// proprties ) is what matters for type compatability

// type varName(annotation/types) = {property : value}

const person: ({ firstName: string, lastName: string, age: number }) = {
    firstName: "Devan",
    lastName: "Modhavadiya",
    age: 18
}
// if we miss any of the spedified property in the type then it gives the error
console.log(person);

// Object as a Parameter in Function

let printPerson = (man: { Age: number, Hobby: string, location: string }): void => {
    console.log(`There is a cool person of Age ${man.Age} from ${man.location} likes ${man.Hobby}`)
    return;
}
printPerson({ Age: 18, location: "Bhavapara", Hobby: "WEB3.0" });

// The thing to note is that we have to specify all the properties and make sure pass all the accordingly with the matching 
// key names must be as it is as in type value must be of that type

