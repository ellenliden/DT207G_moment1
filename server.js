//Starta upp applikationen
const express = require("express");
const app = express();
const port = 3000;

// EJS
app.set("view engine", "ejs");

// Statiska filer
app.use(express.static("public"));

// Route
app.get("/", function (req, res) {
  res.render("index");
});

// Starta upp server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
