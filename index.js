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

// Create BOOK From Form
function createBookFromForm(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const radioButtons = document.getElementsByName('isRead');

  let isRead = '';

  for (let i = 0; i < radioButtons.length; i++) {  //check for radio button selected using `.checked`
      if (radioButtons[i].checked) {
      isRead = radioButtons[i].value;
      break; // Exit loop after finding the selected radio button
      }
  }
  //form.style.display = 'none';
  let lastBook = new Book(title, author, pages, isRead);
  myLibrary.push(lastBook);
  //cardBuilder();
  //loopLibrary();
  displayBook(lastBook);
}


//------------------------------------------------------

function loopLibrary(){
  myLibrary.forEach(function(book) {
    console.log(book);
    displayBook(book);
  });
}

//......................................................

function displayBook(book) {
  const container = document.querySelector("#container");
  console.log("Container:")
  console.log(container);
  // selects the first child of #container => .display
  const div = document.createElement("div");
  div.textContent = `T: ${book.title}; A: ${book.author}; P: ${book.pages}; R: ${book.read};`;
  container.appendChild(div);
}

//......................................................

const book1 = new Book('steve', 'X', 69, 'read');
console.log(book1);

const book2 = new Book('also steve', 'xX', 169, 'not read yet');
console.log(book2);

const book3 = new Book('not steve', 'XXX', 269, 'read');
console.log(book3);

const book4 = new Book('not steve 4', 'XXX4', 2694, 'read 4');
console.log(book4);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

/*
displayBook(book1);
displayBook(book2);

console.log(myLibrary);
*/

loopLibrary();