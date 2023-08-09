// const s1 = 'Hello';
// console.log(typeof(s1)); // type is string

// const s2 = new String('Hello');
// console.log(typeof(s2));  // type is object

// console.log(window);
// window.alert('hello'); // can also do only alert();
// alert('hello');


// console.log(navigator.appVersion);

// Object Literals
/*
const book1 ={
    title:'Book 1',
    author:'John Doe',
    year:'2013',
    getSummary:function(){ //function attached to object
        return `${this.title} 
        was written by ${this.author} 
        in ${this.year}`;
    }
};
console.log(book1);
//if we want to call property then book1.title or author etc
console.log(book1.author);
// can also define a function as a property
console.log(book1.getSummary());


const book2 ={
    title:'Book 2',
    author:'Doe King',
    year:'2003',
    getSummary:function(){ //function attached to object
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2.getSummary());
//if we want to see values of an object
console.log(Object.values(book2)); //gives an array of values
console.log(Object.keys(book2));
*/
// if we want to create more books it is not the right way
// so we have constructors

// Constructors:just a function called by object instantiated

/*function Book(title,author,year){
    //console.log('Book Initialized.....');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// create books or instantiate an object it runs whatever is in the function.
const book1 = new Book('Book 1','Jhon','2002');
const book2 = new Book('book 2','kingo','2023');
 console.log(book1);
console.log(book1.title);
console.log(book1.getSummary()); */

// Prototypes

/*function Book(title,author,year){
    //console.log('Book Initialized.....');
    this.title = title;
    this.author = author;
    this.year = year;
}

//create prototype
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//get age
Book.prototype.getAge = function (){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`; 
}

// revise / change year
Book.prototype.revise = function (newYear){
    this.year = newYear;
    this.revised = true;
}


// create books or instantiate an object it runs whatever is in the function.
const book1 = new Book('Book 1','Jhon','2002');
const book2 = new Book('book 2','kingo','2020')

//console.log(book2.getSummary());
//console.log(book2); //getSummary moved from book2 to proto
// we have done this as we want title,author,year for every book but not getSummary for every book.

// 
console.log(book2.getAge());

//data manipulation 
console.log(book2);
book2.revise('2019');
console.log(book2); */

// Inheritance
/*
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//create prototype
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year); //inherits from Book constructor above
    this.month = month;
}

//inherit prototype 
Magazine.prototype = Object.create(Book.prototype);

//instantiate magazine object
const mag1 = new Magazine('Mag one','Kaled','2023','Jan');
console.log(mag1);

// still using book constructor so if we want to switch to magazine.
// prototype inheritance
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary()); */

// Object Creation

// Object of protos
/*
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// create object

const book1 = Object.create(bookProtos);
book1.title = 'Book 1';
book1.author = 'hosseini'
book1.year = '2015';
//does the same thing different ways.
//console.log(book1);

const book1 = Object.create(bookProtos,{
    title:{value:'Book 1'},
    author:{value:'Jhon'},
    year:{value:'2001'}
});
console.log(book1); */

// all of this was es5 
//--------------------------------------------------------------------------------------------------------------------------------------------------------------//

// now we move to ES6
/*
class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes and Noble';
    }
}

// instantiate an object
const book1 = new Book('Book 1','Dahl','1999');
// console.log(book1);
// book1.revise('2000');
// console.log(book1);

// static methods which we can use without instantiating.
console.log(Book.topBookStore());
// called with class directly */

//Sub Classes

class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes and Noble';
    }
}

// Magazine subclass
class Magazine extends Book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}

// instantiate magazine
const mag1 = new Magazine('Mag 1','Rowling','2010','Feb')
console.log(mag1);
console.log(mag1.getSummary()); //subclasses is easier than es5 inheritance
