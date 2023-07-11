//Book class:Represents books
class Book{
    constructor(title,author,isbn){
        
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

//UI class: Handle Ui Tasks
class UI{
    static displayBooks(){
        const StoredBooks =[
            {
                title:'Nira',
                author:'Sid sriram',
                isbn:'Takkar',
            },
            {
                title:'Nee partha vizhighal',
                author:'anirudh',
                isbn:'Moonu',
            }
            
        ];
        const books =StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }
    static addBookToList(book){
        const list =document.querySelector('#book-list');

        const row=document.createElement('tr');
        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td> <a href="#" class="btn btn-danger btn-sm
         delete">X</a> </td>
        `;

        list.appendChild(row);

    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';

    }
}
//STorage Class:Handles Storage

//Event :Display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//Event:Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>
{
    e.preventDefault();

    //get values from text feilds
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;
    
    //Instatiate book
    const book =new Book(title,author,isbn);
    //add book to UI
    UI.addBookToList(book);
    UI.clearFields();

});


//Event:Remove a book
document.querySelector('#book-list').addEventListener('click',(e)=>
{
        UI.deleteBook(e.target)
});