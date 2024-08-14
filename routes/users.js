const express = require("express");
require("dotenv").config();
const rota = express.Router();

const ControllersUsers = require("../controllers/ContrllersUsers");
const jwt = require("jsonwebtoken");
const { profile } = require("console");
const { constrainedMemory } = require("process");

rota.post("/register", ControllersUsers.cadastro);
rota.post("/login", ControllersUsers.login);
rota.get("/profile", (req, resposta, next) => {
  try {
    const tokenheader = req.headers.authorization;

    const token = tokenheader && tokenheader.split("")[1];
    console.log(token);
    if (token == null) {
      resposta.status("404").send("recurso não encontrado");
    }
    jwt.verify(token, process.env.DB_SECRET_KEY, (err, user) => {
      console.log(user);
      if (err) {
        resposta.send("error do servidor");
      }
      req.user = user;

      next();
    });
  } catch (error) {}
});

module.exports = rota;
