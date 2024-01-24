const express = require("express");

const app = express();

//Your code here
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/pokemon", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
});

app.get("/pokemon/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
});

app.get("/search", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
});

app.post("/pokemon", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
});

app.listen(3000, () => {
  console.log("Server listening on PORT 3000");
});
