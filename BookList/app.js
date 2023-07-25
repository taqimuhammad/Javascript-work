// Book Class : represents book
class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class : handles UI tasks
class UI{
    static displayBooks(){
    /*    const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434'
            },
            {
                title: 'Book Two',
                author: 'Joane Doe',
                isbn: '4545455'
            }
        ]; */

        const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
        list.appendChild(row);    
    }
    //event propagation as using specific class of delete button will only delete first item.
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        // vanish in 3 seconds
        setTimeout(()=> document.querySelector('.alert').remove(),
        3000)
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store : local storage in browser
class Store{
    // static means can call directly without having to instantiate class.
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book,index) => {
            if(book.isbn == isbn){
                books.splice(index,1);
            }
        });

        localStorage.setItem('books',JSON.stringify(books));
    }
}

// Event: Display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

// Event : Add Book
document.querySelector('#book-form').addEventListener('submit',(e) => {
    //prevent actual submit
    e.preventDefault();
    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // validate
    if (title == '' || author == '' || isbn == ''){
        UI.showAlert('Kindly fill all the fields','danger');
    }
    else {
         //instantiate book
    
    const book = new Book(title,author,isbn);
    
    // Add book to UI
    UI.addBookToList(book);
    
    //Add book to store
    Store.addBook(book);

    // add success msg
    UI.showAlert('Book Added SucessFully','success');

    //clear fields after submit
    UI.clearFields();

    }
});

// Event : Remove Book
document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target);
    
    //remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // add successfully removed msg
    UI.showAlert('Book Removed SucessFully','success');
});
