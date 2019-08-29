//carregando modulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
//const mongoose = require('mongoose');

//configurações


//rotas



//outros
const PORT = 8081;
app.listen(PORT,() => {
  console.log("Servidor Rodando! ");
});