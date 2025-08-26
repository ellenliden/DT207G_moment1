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

    //skapa tabell
    client.query(
      `
        CREATE TABLE IF NOT EXISTS courses (
            id SERIAL PRIMARY KEY,
            name VARCHAR(64) NOT NULL,
            code VARCHAR(64) NOT NULL,
            progression VARCHAR(64) NOT NULL,
            syllabus VARCHAR(255) NOT NULL
        );
      `,
      (err, result) => {
        if (err) {
          console.error("Fel vid skapande av tabell: " + err);
        } else {
          console.log("Tabell 'courses' skapad framgångsrikt");
        }
        client.end();
      }
    );
  }
});
