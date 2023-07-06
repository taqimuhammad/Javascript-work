// PROPERTIES OF DOCUMENT OBJECT MODEL


console.dir(document)  //shows the document object and all of the properties and methods attached to document object.
//we can access them and manipulate to our needs. for eg document.all  document.[etc any property].
console.log(document.domain); //gives the domain which is 127.0.0.1 as we are on localhost.
console.log(document.URL); //gives the url of the page
console.log(document.title); //title of the page
//document.title = 123; //and you change these things from the script.title changes to 123.
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); //gives an html collection of everything in the dom. 
console.log(document.all[10]); //gives the h1 which is at index 10.check in browser console

//change the header text
//document.all[10].textContent = 'Hell OO'; //but not the correct way to change. 

console.log(document.forms); //get forms on th page  
//select certain index.
console.log(document.forms[0]);
console.log(document.links); //get links
console.log(document.images);   

//Selecting methods we can use to query the dom.

//GetElementbyID 
console.log(document.getElementById('header-title'));  //gets the element by its id.


