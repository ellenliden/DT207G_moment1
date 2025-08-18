//Starta upp applikationen
const express = require("express");
const bodyParser = require("body-parser"); //Möjliggör att hantera formulärdata
const app = express();
const port = 3000;

// EJS
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Statiska filer
app.use(express.static("public"));

// Route för startsidan (här visas kurser)
app.get("/", function (req, res) {
  res.render("index", { fullname: "Ellen Lidén" });
});

// Route för lägga till kurser
app.get("/add-course", function (req, res) {
  res.render("add-course", { fullname: "Ellen Lidén" });
});

//Route för att lägga till kurser
app.post("/add-course", function (req, res) {
  res.render("add-course", { fullname: "Ellen Lidén" });
});

//Route för om oss
app.get("/about", function (req, res) {
  res.render("about", { fullname: "Ellen Lidén" });
});

// Starta upp server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
