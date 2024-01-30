const Library = require("./data-store");
const express = require("express");
const collection = new Library("mongodb://127.0.0.1:27017/", "library", "books");
const app = express();
const port = 8080;

collection.test();
app.get("/bringmeallthestuff", async (req, res) => {
  try {
    const allBooks = await collection.allBooks();
    res.send(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.post("/addnewstuff", async (req, res) => {
  try {
    collection.addBook(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});
