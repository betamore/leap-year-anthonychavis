// Write code here
const  isLeapYear = year =>  year % 400 == 0 ? true : year % 100 == 0 ? false : year % 4 == 0 ? true : false;

// DONT CHANGE. THIS IS FOR TESTING
let years = [2015, 1970, 1996, 1960, 2100, 1900, 2000, 2400, 1800];

for (let year of years) {
    console.log(isLeapYear(year));
}
