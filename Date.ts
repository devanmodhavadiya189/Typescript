let today:Date= new Date();
console.log(today);

let date:Date = new Date("2026-02-12"); // use the ISO format yyyy-mm-dd
console.log(date)


// the type is :object work fine , in more details for the specific  , Date has it's own type :Date

// Extracting compononents

const now = new Date();

const year = now.getFullYear(); // 2026 for the Now
const month = now.getMonth() // 0-11(0-Base indexing)
const day = now.getDate() // 1-31
const weekday = now.getDay() // 0-6 (sun - sat)


// Date calculations 

// add days

date = new Date();
console.log(date);
date.setDate(date.getDate()+5) // adding 5 days , handle edge cases by it self like current date is 31 and ading change month , change date etc... handle by self
date.setMonth(date.getMonth()-1)// previous month

// difference between two dates 

const d1 :Date= new Date("2026-02-01")
const d2:Date = new Date("2026-05-04");

const diffMs:number = d2.getTime()-d1.getTime(); // getTime Give Time in Milisecond start from January 1, 1970, 00:00:00 UTC (Unix Epoch date)
// diffMS can be used to calulate dates,Seconds,months,years etc... by dividing 24,360,12,60 etc......
const d3:Date = new Date(0) // We can Pass the milisecond and get the date calculated from unix epoch
console.log(d3);




// const indiaTime = new Intl.DateTimeFormat("en-IN", {
//   timeZone: "Asia/Kolkata",
//   dateStyle: "full",
//   timeStyle: "long"
// }).format(new Date());
// console.log(indiaTime)


// problem : generate a random date between given start and end date

function getDate(start:Date,end:Date):Date
{
    let mi=start.getTime();
    let mx=end.getTime()+1;
    let randomms = Math.floor(Math.random()*(mx-mi)+mi)
    return new Date(randomms);
}

console.log(getDate(new Date("2006-05-04"),new Date("2026-02-12")));