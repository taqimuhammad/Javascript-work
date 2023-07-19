var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit',addItem);
// delete event 
itemlist.addEventListener('click',removeItem);
// filter event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){
    e.preventDefault();
    
    // get input value
    var newItem = document.getElementById('item').value;
    
    // create new li element
    var li = document.createElement('li');
    
    // add class
    li.className = 'list-group-item';
    
    // add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button element
    var deleteBtn = document.createElement('button');
    
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // append button to li.
    li.appendChild(deleteBtn);
    
    // append li to list
    itemlist.appendChild(li);

}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('You sure ?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}




















