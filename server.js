const express = require("express");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/addContact", (req, res) => {
  res.send("create contact");
});

app.get("/removeContact", (req, res) => {
  res.send("removing contact");
});

app.all("*", (req, res) => {
  res.status(404).send("Oops you are lost!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
