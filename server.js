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

//Middleware för att visa "current page" (vart användaren är) automatiskt
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Array för att lagra kurser
let courses = [];

// Route för startsidan (här visas kurser)
app.get("/", (req, res) => {
  res.render("index", { fullname: "Ellen Lidén" });
});

// Route för lägga till kurser (footer)
app.get("/add-course", (req, res) => {
  res.render("add-course", { fullname: "Ellen Lidén" });
});

//Route för att lägga till kurser
app.post("/add-course", (req, res) => {
  res.render("add-course", { fullname: "Ellen Lidén" });
});

//Route för om oss
app.get("/about", (req, res) => {
  res.render("about", { fullname: "Ellen Lidén" });
});

// Starta upp server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
