// Higher Order Array Methods in JS.

const companies = [
    {name: "Company One",   category: "Finance",    start: 1981, end: 2003},
    {name: "Company Two",   category: "Retail",     start: 1992, end: 2008},
    {name: "Company Three", category: "Auto",       start: 1999, end: 2007},
    {name: "Company Four",  category: "Retail",     start: 1989, end: 2010},
    {name: "Company Five",  category: "Technology", start: 2009, end: 2014},
    {name: "Company Six",   category: "Finance",    start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto",       start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine",  category: "Retail",     start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 24, 65, 32];

//simple for loop
for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

// forEach
companies.forEach(function(Company){
    console.log(Company.name);
});

// filter

let candrink = [];
for (let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21){
        candrink.push(ages[i]);
    }
}

// using filter method
const candrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});

// can better this also by writing one liner
const candrink = ages.filter((age) => age >= 21);
// console.log(candrink);

// filter retail companies
const rcomp = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
});

//one liner
const company = companies.filter((company) => company.category === 'Retail'); 
// console.log(company);

// get 80s companies

const comp80 = companies.filter((company) => (company.start >= 1980 && company.start < 1990));
// console.log(comp80);

// companies that lasted 10 years
const comp10 = companies.filter((company) => (company.end - company.start >= 10));
// console.log(comp10);

// map
create array of company names
const cnames = companies.map(function(company){
    return company.name;
});

// one liner arrow function
const names = companies.map(company => company.name);
console.log(names);

const testmap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
});

// one liner method
const stestmap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(stestmap);

const agesSq = ages.map(age =>  Math.sqrt(age)); 
const ages2 = ages.map(age =>  age * 2); 

// console.log(agesSq);
// console.log(ages2);

const agemap = ages // sqrt ages and then multiplies them by 2
    .map(age =>  Math.sqrt(age))
    .map(age =>  age * 2); 

//    console.log(agemap);

// sort
// const sortcomp = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;                       
//     }           
//     else{
//         return -1;
//     }
// });

const sortcomp = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// console.log(sortcomp);

// sort ages
const sortages = ages.sort((a,b) => a - b); //descending order: b - a
// console.log(sortages);

// reduce

// add all the ages together

let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}
// console.log(ageSum);

// with reduce

// const agesum = ages.reduce(function(total,age){
//     return total + age;
// },0);

// with arrow function
const agesum = ages.reduce((total,age) => total + age , 0);

// console.log(agesum);

// total years for all companies
// const tyears = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// },0);

// arrow function
const tyears = companies.reduce((total,company) => total + (company.end - company.start), 0);

console.log(tyears);

// combine methods

const combined = ages
    .map(age => age)
