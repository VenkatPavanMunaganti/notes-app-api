const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(bodyParser.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: false,
  },
  {
    id: 2,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: 3,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 4,
    content: "NodeJS helps run JavaScript outside of the browser",
    important: true,
  },
  {
    id: 5,
    content: "ExpressJS makes backend even fun and easy",
    important: false,
  }
];

//To DO: Write the end point for getting list of notes
// GET /api/notes
app.get("/api/notes", (req, res) => {

});

//To DO: Write the end point to add new note to the list
// POST /api/notes
app.post("/api/notes", (req, res) => {

});

//To DO: Write an endpoint to delete from the list
// DELETE /api/notes/:id
app.delete("/api/notes/:id", (req, res) => {

  //Disable cache
  res.set("Cache-Control", "no-cache");
  res.set("Pragma", "no-cache");

});

//To Do: write the code to start the server in port 5000
const PORT = 5000;

