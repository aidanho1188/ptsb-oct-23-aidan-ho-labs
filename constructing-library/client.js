const Library = require("./Library");
const collection = new Library("mongodb://127.0.0.1:27017/", "library", "books");

collection.test();

async function logAllBooks() {
  try {
    const allBooks = await collection.allBooks();
    allBooks.forEach((book) => {
      console.log(book);
    });
  } catch (error) {
    console.log(error);
  }
}
// logAllBooks();

async function logOneBook(_id) {
  try {
    const result = await collection.findOneBook(_id);
    result.forEach((book) => {
      console.log(book);
    });
  } catch (error) {
    console.log(error);
  }
}
// logOneBook("65b1f7d7b2f63cb43ed222f5");

async function logManyBooks(query) {
  const findManyBooks = await collection.findManyBooks(query);
  findManyBooks.forEach((book) => {
    console.log(book);
  });
}
// logManyBooks({"copies": 1});

async function addBook(book) {
  try {
    await collection.addBook(book);
  } catch (error) {
    console.log(error);
  }
}
// addBook({title: "book 4", author: "aidan", copies: 1});

async function changeBook(_id, infoObj) {
  await collection.changeBook(_id, infoObj);
}
// changeBook("65b1f7d7b2f63cb43ed222f5", {
//   copies: 2,
// });

async function removeBook(_id) {
  await collection.removeBook(_id);
}
// removeBook("65b20e0fcda6525b65fc575d");

