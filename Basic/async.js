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

            const error = false; //true --> .catch added after .then
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
createPost({title:'Post Three',body:'This is post three'}).then(getPosts);

