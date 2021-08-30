let CARD_SIZE = '200px';

function Book(title, author, pages, read, other) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (other)
        this.other = other;
    
    this.info = function() {
        return `${this.title}, by ${this.author}, ${this.pages} pages`;
    }
    this.details = function() {
        return `by ${this.author}, ${this.pages} pages`;
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
    console.log(book.read);

    book.index = myLibrary.length;
    myLibrary.push(book);

    hideInputForm();
    exportLibrary();
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
    const radios = newBook_form.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.value = radio.id);
    newBook_form.style.display = 'none';
}

function emptyDisplay() {
    const displayedBooks = displayGrid.querySelectorAll('div[class="display_book"]');
    displayedBooks.forEach(book => displayGrid.removeChild(book));
}

function deleteBook(book) {
    myLibrary.splice(book.index, 1);
    for (let i = 0; i < myLibrary.length; i++)
        myLibrary[i].index = i;
    updateLocalStorage();
    exportLibrary();
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

        const newTitleDiv = document.createElement('div');
        newTitleDiv.innerText = book.title;
        newTitleDiv.classList.add('book_title');

        const newDetailsDiv = document.createElement('div');
        newDetailsDiv.innerText = book.details().split(', ').join('\r\n');
        newDetailsDiv.classList.add('book_details');
        newBookDiv.appendChild(newDetailsDiv);
        newBookDiv.appendChild(newTitleDiv);
        

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
        

        const newIconsZone = document.createElement('div');
        newIconsZone.classList.add('icons_zone');
        newBookDiv.appendChild(newIconsZone);

        const newCommentImg = document.createElement('img');
        if (book.other) {
            newCommentImg.src = 'idea.png';
            newCommentImg.title = `Comment: "${book.other}"`;
        }
        else {
            newCommentImg.src = 'noidea.png';
            newCommentImg.title = 'No comment';
        }
        newCommentImg.classList.add('comm_img');
        newIconsZone.appendChild(newCommentImg);

        const newBookDel = document.createElement('button');
        newBookDel.textContent = 'x';
        newBookDel.classList.add('delete_btn');
        newIconsZone.appendChild(newBookDel);

        newBookDel.addEventListener('click', function(e) {
            if (confirm(`Are you sure you want to delete ${book.title} from your Little Library ?`)) {
                deleteBook(book);
                alert(`${book.title} was removed from your Little Library`);
            } 
        });

        
    });
}

function updateLocalStorage() {
    console.log(`in update lib beg`);
    myLibrary.forEach(book => {
        for (key in book) {
            localStorage.removeItem(`${book.index}${key}`)
        }
    });
}

function exportLibrary() {
    myLibrary.forEach(book => {
        for (key in book) 
            localStorage.setItem(`${book.index}${key}`, `${book[key]}`)
        
    });
    localStorage.setItem('library_size', `${myLibrary.length}`)
};

function importLocalStorage() {
    if (!localStorage.getItem('library_size'))
        return;
    for (let i = 0; i < localStorage.getItem('library_size'); i++) {
       
        let newBook = new Book(localStorage.getItem(`${i}title`), localStorage.getItem(`${i}author`), 
                        localStorage.getItem(`${i}pages`), localStorage.getItem(`${i}read`), 
                        localStorage.getItem(`${i}other`));
        newBook.index = myLibrary.length;
        myLibrary.push(newBook);
    }

};

importLocalStorage();
displayLibrary();



/* -----------TESTS----------- */

// addBookToLibrary();
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes', 'omg loved it');
// const harryPotter = new Book('Harry Potter', 'J.K.R', 3300, 'read');
// const memoires = new Book('Memoires', 'C. De Gaulle', 800, 'will never read');

// myLibrary.push(theHobbit);
// myLibrary.push(harryPotter);
// myLibrary.push(memoires);

/*************/

