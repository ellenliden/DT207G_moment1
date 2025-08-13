//Starta upp applikationen
const express = require("express");
const app = express();
const port = 3000;

// EJS
app.set("view engine", "ejs");

// Statiska filer
app.use(express.static("public"));

// Route för startsidan
app.get("/", function (req, res) {
  res.render("index");
});

// Route för lägga till kurser
app.get("/add-course", function (req, res) {
  res.render("add-course");
});

//Route för visa kurser
app.get("/courses", function (req, res) {
  res.render("courses");
});

//Route för om oss
app.get("/about", function (req, res) {
  res.render("about");
});

// Starta upp server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
