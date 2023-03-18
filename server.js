const express = require("express");
const bodyParser = require("body-parser");
const cors= require("cors")

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

// GET /api/notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST /api/notes
app.post("/api/notes", (req, res) => {
  const lastId= notes.length === 0? 0: notes[notes.length-1].id
  const note = {
    content: req.body.content,
    important: req.body.important,
    id: lastId + 1,
  };
  notes.push(note);
  res.json(note);
});

// DELETE /api/notes/:id
app.delete("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  notes = notes.filter((note) => note.id !== noteId);
  res.set("Cache-Control", "no-cache");
  res.set("Pragma", "no-cache");
  res.sendStatus(204);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
