const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connection = require("./database/index");

app.use(express.json());

app.use(routes);

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o Banco de Dados realizada com Sucesso!!!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

app.listen(3333);
