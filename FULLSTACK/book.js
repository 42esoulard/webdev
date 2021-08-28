function Book(title, author, pages, read, other) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (other)
        this.other = other;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

let myLibrary = [];

const newBook_form = document.querySelector('.newBook_form');
const newBook_form_submit = newBook_form.querySelector('button');


const newBook_btn = document.querySelector('.newBook_btn');
newBook_btn.addEventListener('click', displayInputForm);


function addBookToLibrary() {

    let book = new Book();

    const inputs = newBook_form.querySelectorAll('input');
    inputs.forEach(input => book[input.name] = input.value);
    inputs.forEach(input => input.value = null);

    myLibrary.push(book);
    hideInputForm();
    displayLibrary();
    return false;
}

const html_body = document.querySelector('body');


function displayInputForm() {
    newBook_form.style.display = 'block';
}
function hideInputForm() {
    newBook_form.style.display = 'none';
}

const displayGrid = document.querySelector('.display_grid');


function emptyDisplay() {
    const displayedBooks = displayGrid.querySelectorAll('div');
    displayedBooks.forEach(book => displayGrid.removeChild(book));
}

function displayLibrary() {
    emptyDisplay();
    myLibrary.forEach(book => {
        // const newBookDiv = document.createElement('div');
        // displayGrid.appendChild(newBookDiv);
        // newBookDiv.classList.add('.display_book');
        // newBookDiv.textContent = book.info();
        console.log(book.info());
    });
}

/* -----------TESTS----------- */

// addBookToLibrary();
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// const harryPotter = new Book('Harry Potter', 'J.K.R', 3300, 'read');
// const memoires = new Book('Memoires', 'C. De Gaulle', 800, 'will never read');

myLibrary.push(theHobbit);
// myLibrary.push(harryPotter);
// myLibrary.push(memoires);

// displayLibrary();

