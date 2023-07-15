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
console.log(document.images);   

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

//  GetElementsbyCLassName
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);  //get the item at 2nd position. at 2nd li tag.
// item[1].textContent = 'Changed 2'; //change text of particular item.
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'yellow';

// // add changes styles to all items in the list.
// //item.style.backgroundColor = 'Blue'; 
// // ^ not going to work as we have HTML collection,not array.

// //so use loop.
// for(var i = 0;i < item.length; i++){
//     item[i].style.backgroundColor = '#f4f4f4';
// }

//  GetElementbyTagName ---> works same as above just uses tagname instead of classname.

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);  //get the item at 2nd position. at 2nd li tag.
li[1].textContent = 'Changed 2'; //change text of particular item.
li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';

// add changes styles to all items in the list.
//item.style.backgroundColor = 'Blue'; 
// ^ not going to work as we have HTML collection,not array.

//so use loop.
/*for(var i = 0;i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
*//*

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
*/

// Traversing the DOM 
/*

var itemlist = document.querySelector('#items');
//parentNode property

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement-->most cases can be used interchangbly with parentNode as it does the same thing.
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes

// console.log(itemlist.childNodes);
// //in console we see text alternatively with li which is just the linebreak.
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'coral';

// //firstChild
// console.log(itemlist.firstChild); //gives text but should give li as same issue due tolinebreak.

// //firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Food';

// //lastChild
// console.log(itemlist.lastChild); //gives text but should give li as same issue due tolinebreak.

// //lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Movie';

//nextSibling
console.log(itemlist.nextSibling);
//nextElementSibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);
// previousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'green';

// createElement
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title','Welcome to new Div');

// create text node
var newDivText = document.createTextNode('New Div');

// add text to div
newDiv.appendChild(newDivText);

// put it in the dom

var cont = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

cont.insertBefore(newDiv,h1);//takes 2 parameters.
//what we are inserting and one is what we are inserting before.

newDiv.style.fontSize = '30px';

console.log(newDiv); */

// EVENTS IN JAVASCRIPT

//buttonClick function in button tag

// var button = document.getElementById('button').addEventListener
// ('click', function(){
//     console.log(123); //or replace it with buttonClick function below.
//     return;
// }); 

var button = document.getElementById('button').addEventListener('click',buttonclick);

function buttonClick(){
    // console.log('Button Clicked');
    // so now when button gets clicked header changes.
    document.getElementById('header-title').textContent = 'Changed';
    // changes the add item div.
    document.querySelector('#main').style.backgroundColor = '#f4f4f4'; //can also do it by getElementbyID
};

// e is the event object passed in function.
//event parameter
function buttonclick(e){
    //console.log(e);
    
    //gives whatever element the event is fired from
    console.log(e.target);
    //gives id
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);//gives dom tokenlist array of classes
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type); // gives the type of event whether a click ot etc.
    console.log(e.clientX); // gives the position of X from the browser
    console.log(e.clientY);

    console.log(e.offsetX); // gives positon from element itself(etc button)
    console.log(e.offsetY);

    console.log(e.altkey); //hold alt key and click button turns true;
    console.log(e.ctrlkey);
    console.log(e.shiftkey);    
}







































