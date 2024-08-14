require("dotenv").config();

const getDbConnection = require("../connection");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");

class Users {
  constructor(username, senha) {
    this.username = username;
    this.senha = senha;
  }

  async cadastro() {
    try {
      const query = "INSERT INTO usuarios (name,senha) VALUES (?,?)";
      const hashpasswrod = await bycript.hash(this.senha, 10);
      console.log(this.senha, this.username);
      const db = await getDbConnection();
      const [results] = await db.execute(query, [this.username, hashpasswrod]);
      console.log(results);
    } catch (error) {
      throw new Error("não foi possivel cadastrar o usuário");
    }
  }
  async login() {
    try {
      const query = "SELECT * FROM usuarios WHERE name = ? ";
      const db = await getDbConnection();

      const [resultado] = await db.execute(query, [this.username]);
      console.log(resultado);
      if (resultado.length === 0) {
        throw new Error("não foii possivel encontrar o usuário");
      }

      const [User] = resultado;
      console.log(User);

      const passwordMatch = await bycript.compare(this.senha, User.senha);
      console.log(passwordMatch);
      if (!passwordMatch) {
        throw new Error("senhas não compativeis");
      }
      const token = jwt.sign(
        { id: User.id, name: User.name },
        process.env.DB_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return token;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Users;
