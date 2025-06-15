const myLibrary = [];

function Book(title, author, pages, read) {
  // The Constructor
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = self.crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // take params, create a book then store it in the array
  myLibrary.push(book);
}


const book1 = new Book('steve', 'X', 69, 'read');
console.log(book1);

addBookToLibrary(book1);
console.log(myLibrary);