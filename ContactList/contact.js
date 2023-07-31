//Get input element
let filterinput = document.getElementById('filter-input');

//Add event listener
filterinput.addEventListener('keyup',filterNames);

function filterNames(){
    //get value of input
    let filtervalue = document.getElementById('filter-input').value.toUpperCase();
    
    // get names ul
    let ul = document.getElementById('names');
    // get li
    let li = ul.querySelectorAll('li.collection-item');

    //loop through and search for the input above
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if matched 
        if(a.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }

}
