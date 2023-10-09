const express = require("express");
const app = express();

app.use(express.json()); //express.json() é um middleware que verifica se no corpo da requisição existe um arquivo JSON

const log = (req, res, next) => {
  console.log(req.body);
  console.log(Date.now());
  next();
};

app.use(log);

app.get("/json", (req, res) => {
  res.json({ name: "leandro" });
});

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas</h1>");
});

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
});
