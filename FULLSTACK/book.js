function Book(title, author, pages, read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

let myLibrary = [];

function addBookToLibrary() {
    let title = prompt('Book title:');
    let author = prompt('Author:');
    let pages = prompt('Number of pages:');
    let read = prompt('Read status:');

    myLibrary.push(new Book(title, author, pages, read));
}



function browseLibrary() {
    myLibrary.forEach(book => console.log(book.info()));
}

// addBookToLibrary();
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const harryPotter = new Book('Harry Potter', 'J.K.R', 3300, 'read');
const memoires = new Book('Memoires', 'C. De Gaulle', 800, 'will never read');

myLibrary.push(theHobbit);
myLibrary.push(harryPotter);
myLibrary.push(memoires);

browseLibrary();

