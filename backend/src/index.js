const express = require("express");

const cors = require("cors");

const rotas = require("./rotas/rotas");

require("dotenv").config();

const porta = process.env.PORTA_SERVIDOR;

const app = express();

app.use(cors());

app.use(express.json());

app.use(rotas);

app.listen(porta, console.log(`Servidor rodando na porta ${porta}`));