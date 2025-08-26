const { Client } = require("pg");
require("dotenv").config();

//anslut till databasen
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

//anslut till databasen
client.connect((err) => {
  if (err) {
    console.error("Fel vid anslutning till databasen" + err);
  } else {
    console.log("Ansluten till databasen");
  }
});

//Starta upp applikationen
const express = require("express");
const bodyParser = require("body-parser"); //Möjliggör att hantera formulärdata
const app = express();
const port = process.env.PORT || 3000; //Port för att kunna köra på olika portar

// EJS
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Statiska filer
app.use(express.static("public"));

//Middleware för att hantera formulärdata (aktivera formulärdata)
app.use(express.urlencoded({ extended: true }));

//Middleware för att visa "current page" (vart användaren är) automatiskt
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Array för att lagra kurser
let courses = [];

// Route för startsidan (här visas kurser)
app.get("/", async (req, res) => {
  try {
    // Hämta alla kurser från databasen
    const result = await client.query("SELECT * FROM courses ORDER BY id DESC");
    const courses = result.rows;

    res.render("index", {
      fullname: "Ellen Lidén",
      courses: courses,
    });
  } catch (error) {
    console.error("Fel vid hämtning av kurser:", error);
    res.render("index", {
      fullname: "Ellen Lidén",
      courses: [],
    });
  }
});

// Route för lägga till kurser (footer)
app.get("/add-course", (req, res) => {
  res.render("add-course");
});

//Route för att lägga till kurser
app.post("/add-course", async (req, res) => {
  try {
    const { name, code, progression, syllabus } = req.body;

    // Kontrollera att alla fält är ifyllda
    if (!name || !code || !progression || !syllabus) {
      return res.status(400).send("Alla fält måste fyllas i");
    }

    //sql-fråga för att lägga till kurs
    const result = await client.query(
      "INSERT INTO courses (name, code, progression, syllabus) VALUES ($1, $2, $3, $4)",
      [name, code, progression, syllabus]
    );

    console.log("Kurs tillagd:", result.rows[0]);
    res.redirect("/");
  } catch (error) {
    console.error("Fel vid spara av kurs:", error);
    res.status(500).send("Fel vid spara av kurs");
  }
});

//Route för att ta bort kurser
app.post("/delete-course/:id", async (req, res) => {
  try {
    const courseId = req.params.id;

    //sql-fråga för att ta bort kurs
    const result = await client.query(
      "DELETE FROM courses WHERE id = $1 RETURNING *",
      [courseId]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Kursen hittades inte");
    }

    console.log("Kurs borttagen:", result.rows[0]);
    res.redirect("/");
  } catch (error) {
    console.error("Fel vid borttagning av kurs:", error);
    res.status(500).send("Fel vid borttagning av kurs");
  }
});

//Route för om oss
app.get("/about", (req, res) => {
  res.render("about");
});

// Starta upp server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
