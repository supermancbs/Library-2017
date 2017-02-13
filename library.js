// I decided to create two seperate classes. One class represents a single book,
// and another class represents the library, in which we can retrieve information on these books.
function Book (isbn, title) {
    this.isbn = isbn;
    this.title = title;
}

// Since I am only working with one javascript file I hardcoded the 'books' into this array. If I were to
// user a database, such as Postgres each book would be represented as a row in a Book table.
// The book table would have a column for a isbn and a title. The javascript class book would correspond to this table.
var books = [new Book('978-3-16-148410-0', 'Harry Potter'), new Book('808-3-16-138410-0', 'Lord of the Rings')]

function Library() {
  // I am not definding searchIsbn and searchTitle here because each time a created a new
  // Library instance I would defined those functions again. So I decided to use inheritance instead.
};

//  I am using prototype so Library inherits searchIsbn and searchTitle.
Library.prototype.searchIsbn = function(isbn) {
  for (i = 0; i < books.length; i++) {
    if (books[i].isbn==isbn){
      return books[i];
    };
  };
  // If the book was not found I return this string.
  return "Book not Found";
};

Library.prototype.searchTitle = function(title) {
  for (i = 0; i < books.length; i++) {
    if (books[i].title==title){
      return books[i];
    };
  };
  return "Book not Found";
};

// Below is an example of how the two functions work.

lib = new Library

lib.searchIsbn('808-3-16-138410-0')
lib.searchTitle('Lord of the Rings')
lib.searchIsbn('978-3-16-148410-0')
