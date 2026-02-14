// Enum is a way to define a set of named constants. Enums allow you
// to define a collection of related values that can be used interchagably in your code

/*

for example , let's say building a weather app and we want to define a set of posible weather
condiation like "Sunny" , "Cloudy", "Rainy",and "Snowy". we can define enum like this :

enum WeatherCondiatios  {
Sunny,
Cloudy,
Rainy,
Snowy
}

enum WeatherCondiatios  {
Sunny="Sunny",
Cloudy="Cloudy",
Rainy="Rainy",
Snowy="Snowy"
}
*/


enum WeatherCondiatios{
    Sunny,
    Cloudy,
    Rainy,
    Snowy
}
console.log(WeatherCondiatios.Sunny) // This will give us index (0 for sunny , 4->snowy), because no value is assigned other wise
// WeatherCondiatios.Snowy="Something" // We cannot assign like this because it is read only propety

enum Cartom{
    hero="Chhota Bheem",
    King="Indraverma",
    willan="Mangalsingh",
    Scientist="Dhoomketu"
}

let currenthero=Cartom.hero
console.log(currenthero) // this will give us chhota bheem

/*
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ cd "/home/devan-modhavadiya/Desktop/Frontend/TS/" && bun tsc Enums.ts && bun Enums.js
0
Chhota Bheem
devan-modhavadiya@devan-HP-Laptop-15s-fq5xxx:~/Desktop/Frontend/TS$ 

*/