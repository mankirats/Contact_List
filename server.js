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

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
