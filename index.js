const express = require("express");
const app = express();

// Persons
let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "asd",
    number: "123123",
    id: 3,
  },
];

// GET persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

// GET Info
app.get("/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p> <p>${new Date()}</p`
  );
});

// GET person
app.get("/api/persons/:id", (req, res) => {
  // We get the number passed by param
  const id = Number(req.params.id);
  // Search  for the person in the array
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

// DELETE person
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
  console.log(persons);
});

const port = 3004;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
