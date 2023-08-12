// callbacks
/*
const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];


function getPosts (){
    setTimeout(function(){

    },1000); //delay for 1000 ms
}

// can also use arrow function
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); //1000 ms
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

//call this function

//getPosts();

//create post

createPost({title:'Post Three',body:'This is post three'}, getPosts); */

// Promises

const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];


// can also use arrow function
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); //1000 ms
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true; //true --> .catch added after .then
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong')
            }
        }, 2000);
    });    
}

//call this function
createPost({title:'Post Three',body:'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));
// if true then add catch. now we can see console log error 
*/

// Async / Await
// async function init(){
//     await createPost({title:'Post Three',body:'This is post three'});
    
//     getPosts();
// }

// init();

// async / await / fetch
async function fetchusers(){
    
}

// promise.all 
/*
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>
    setTimeout(resolve,2000, 'Goodbye')
);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
*/

