// variables in js
// let ,const = constant so cannot be changed.use const unless you know you gonna change the value or reassign it.
const ag=20;
let b = 30;
//console.log(ag);

// datatypes
// Strings,Numbers,Boolean,null,undefined

const name = 'taqi';
const age = 21;
const dec = 2.3; // no concept of decimals/floats in js.
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined

//console.log(typeof z)

//concatenation of strings

const v1 = 'john';
const v2 = 20;

//console.log('my name is ' + v1 + ' and my age is ' + v2);

//template strings/literals
 
//console.log(`my name is ${v1} and my age is ${v2}`);
const hello = `my name is ${v1} and my age is ${v2}`;
//console.log(hello);

//string properties
const s = 'Hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toLowerCase());
console.log(s.split(""));
console.log(s.split(" "));

const t = 'technology, it, code, cs';
console.log(t.split(', '));

//arrays-can have multiple datatypes within an array
const array = new Array(1,2,3,4,5); //old method
console.log(array);

const narray = ['apple','banana','orange',10]; //new method  
console.log(narray);
console.log(narray[1]);
narray[3] = 'pears';
narray.push('pineapple','mangoes');  //add at the end of array
narray.unshift('pomegranate'); //add in the beginning of array
narray.pop(); //pop last one out.in this case mangoes pop out.
console.log(narray);

//check if something is in arary
console.log(Array.isArray('mangoes')); //should give false.

//check index of element
console.log('index of orange is:',narray.indexOf('orange'));

//object literals-key value pairs
const person = {
    fname:'Taqi',
    lname:'Muhammad',
    age:21,
    hobbies:['football','books','cricket'],
    address:{
        city:'Karachi',
        state:"Sindh"
    }
}

//directly add properties
person.email = "john@gmail.com";
console.log(person);
console.log(person.fname,person.lname,person.hobbies[1]);
console.log(person.address.city);

//destructuring object
//console.log(fname); cannot access in this way.
const { fname , lname ,address:{city} } = person;
console.log(fname);
console.log(city);

//array og objects

const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted:false
    },
];

console.log(todos[1].text);  //select from array of objects.

//convert into JSON format.read about JSON format
const todojson = JSON.stringify(todos);
console.log(todojson);

//loops
for(let i = 0;i < 5; i++){
    //console.log('Number:',i);
    console.log(`Number: ${i}`);

}

//while loop

let i = 0;
while(i < 5){
    console.log(`in while loop ${i}`);
    i++
}

//loop through arrays

for(let i = 0; i < todos.length ; i++){
    console.log(todos[i].text); //if we want anything else then todos.etc .in this case text is output.
}

//best method
for(let x of todos){
    console.log(`Ids:${x.id}`);   //is we want text then x.text
}

//higher order array methods/best practice for iteration with arrays.
// forEach   :loops thorough them 
// map       :allow us to create a new array from an array , 
// filter    :same as map but bases on a condition
console.log('forEach Function');
todos.forEach(function(x){
    console.log(x.text);
});

console.log('map function');

const todotext = todos.map(function(x){
    return x.text
});
console.log(todotext);

console.log('filter function');

const todocomp = todos.filter(function(x){
    return x.isCompleted === true;
});
console.log(todocomp);

//map added to filter
const todocom = todos.filter(function(x){
    return x.isCompleted === true;
}).map(function(x){
    return x.text;
});
console.log(todocom);

//conditionals --> if,else etc



//function and dom
function sum(b,c){
    let a = b + c;
    return a;    
};
console.log(sum(3,4));














