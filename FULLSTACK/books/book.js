let CARD_SIZE = '200px';

function Book(title, author, pages, read, other) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (other)
        this.other = other;
    this.info = function() {
        let ret = `${this.title}, by ${this.author}, ${this.pages} pages`;
        if (this.other)
            ret += `, Comment: ${this.other}`;
        return ret;
    }
}

let myLibrary = [];

const displayGrid = document.querySelector('.display_grid');

const newBook_form = document.querySelector('.newBook_form');
const newBook_form_submit = newBook_form.querySelector('button');

const newBook_btn = document.querySelector('.newBook_btn');
newBook_btn.addEventListener('click', displayInputForm);


function addBookToLibrary() {

    let book = new Book();

    const inputs = newBook_form.querySelectorAll('input');
    inputs.forEach(input => book[input.name] = input.value);
    const radios = newBook_form.querySelectorAll('[type="radio"]');
    radios.forEach(radio => { 
        if (radio.checked)
            book.read = radio.value;
    });

    book.index = myLibrary.length;
    myLibrary.push(book);

    hideInputForm();
    displayLibrary();
    return false;
}

const html_body = document.querySelector('body');


function displayInputForm() {
    if (newBook_form.style.display === 'block')
        hideInputForm();
    else
        newBook_form.style.display = 'block';
}
function hideInputForm() {
    const inputs = newBook_form.querySelectorAll('input');
    inputs.forEach(input => input.value = null);
    newBook_form.style.display = 'none';
}

function emptyDisplay() {
    const displayedBooks = displayGrid.querySelectorAll('div');
    displayedBooks.forEach(book => displayGrid.removeChild(book));
}

function deleteBook(book) {
    myLibrary.splice(book.index, 1);
    displayLibrary();
}

function changeReadStatus(book) {
    if (confirm(`Do you want to update ${book.title}'s read status' ?`)) {
        if (book.read === 'yes')
            book.read = 'no';
        else
            book.read = 'yes';
        displayLibrary();
    } 
}

function displayLibrary() {
    emptyDisplay();
    myLibrary.forEach(book => {

        const newBookDiv = document.createElement('div');
        displayGrid.appendChild(newBookDiv);
        newBookDiv.classList.add('display_book');
        newBookDiv.innerText = book.info().split(', ').join('\r\n');
        const newReadImg = document.createElement('img');
        if (book.read == 'yes') {
            newReadImg.src = 'storytelling.png';
            newReadImg.title = 'Book read!';
        }
        else {
            newReadImg.src = 'book-of-black-cover-closed.png';
            newReadImg.title = 'Book not read yet';
        }
        newReadImg.classList.add('read_img');
        newReadImg.addEventListener('click', function(e){changeReadStatus(book)});
        newBookDiv.appendChild(newReadImg);
            

        const newBookDel = document.createElement('button');
        newBookDel.textContent = 'Delete';
        newBookDel.classList.add('delete_btn');
        newBookDiv.appendChild(newBookDel);

        newBookDel.addEventListener('click', function(e) {
            if (confirm(`Are you sure you want to delete ${book.title} from your Little Library ?`)) {
                deleteBook(book);
                alert(`${book.title} was removed from your Little Library`);
            } 
        });
        
    });
}

/* -----------TESTS----------- */

// addBookToLibrary();
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');
// const harryPotter = new Book('Harry Potter', 'J.K.R', 3300, 'read');
// const memoires = new Book('Memoires', 'C. De Gaulle', 800, 'will never read');

myLibrary.push(theHobbit);
// myLibrary.push(harryPotter);
// myLibrary.push(memoires);

displayLibrary();

