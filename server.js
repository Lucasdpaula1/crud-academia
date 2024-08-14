const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const porta = process.env.PORT || 3000;
const rotasUsers = require("./routes/users");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/users", rotasUsers);
app.listen(porta, () => {
  console.log("meu serviço está rodando na porta ", porta);
});
