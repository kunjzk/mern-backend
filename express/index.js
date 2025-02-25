import "dotenv/config";
import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/ice-tea", (req, res) => {
  res.send("Hello world from ice tea");
});

app.get("/hot-tea", (req, res) => {
  res.send("Hello world from hot tea");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.use(express.json());

let teaData = [];
let nextId = 1;

// C: Create
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price }; // shorthand notation to create "name": <name>, etc
  teaData.push(newTea);
  res.status(201).send(newTea); // send json data
});

// R: Read
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id)); // any data coming from the body is accessed via req.body, anything coming from the url is accessed via params
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

// U: Update tea
app.put("/teas/:id", (req, res) => {
  const teaID = parseInt(req.params.id);
  const tea = teaData.find((t) => t.id === teaID);
  if (!tea) {
    return res.status(404).send("Tea not found");
  }

  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

// D: Delete tea
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id == parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  res.status(204).send(teaData);
});
