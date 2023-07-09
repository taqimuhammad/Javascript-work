// PROPERTIES OF DOCUMENT OBJECT MODEL

/*
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
console.log(document.images);   */

//Selecting methods we can use to query the dom.

//  GetElementbyID 

//console.log(document.getElementById('header-title'));  //gets the element by its id.
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Document Lister'; //pays attention to style.<span> eg
// headerTitle.innerHTML = '<h3>Welcome</h3>'; // added inside h1 which says Item Lister.

//headerTitle.style.borderBottom = 'solid 3px #000';

header.style.borderBottom = 'solid 3px #000';

 GetElementsbyCLassName
var item = document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[1]);  //get the item at 2nd position. at 2nd li tag.
item[1].textContent = 'Changed 2'; //change text of particular item.
item[1].style.fontWeight = 'bold';
item[1].style.backgroundColor = 'yellow';

// add changes styles to all items in the list.
//item.style.backgroundColor = 'Blue'; 
// ^ not going to work as we have HTML collection,not array.

//so use loop.
for(var i = 0;i < item.length; i++){
    item[i].style.backgroundColor = '#f4f4f4';
}

//  GetElementbyTagName ---> works same as above just uses tagname instead of classname.

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);  //get the item at 2nd position. at 2nd li tag.
li[1].textContent = 'Changed 2'; //change text of particular item.
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// add changes styles to all items in the list.
//item.style.backgroundColor = 'Blue'; 
// ^ not going to work as we have HTML collection,not array.

//so use loop.
for(var i = 0;i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}


//Query Selectors
var header2 = document.querySelector('#main-header'); //used # as it is not getbyid so explicit define.
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input'); //takes the first input by default.
input.value = 'Welcome';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

var items = document.querySelector('.list-group-item');
items.style.color = 'red'; //changes the color of 1st item.

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

//can also change nth child.
var nthitem = document.querySelector('.list-group-item:nth-child(2)');
nthitem.style.color = 'coral';

//Query Selectorsall

//works similar to others and selects more than one thing.
var titles = document.querySelectorAll('.title') //can put anything like classes,ids,etc.
console.log(titles); //gives a nodelist and we can run array functions.
// two titles so titles[0] gives first.
titles[0].textContent = 'Select Items';

//alternate gray background.
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}


//Traversing the dom
