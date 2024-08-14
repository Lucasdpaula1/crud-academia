const User = require("../models/ModelsUsers");
const { use } = require("../routes/users");
const cadastro = async (request, response) => {
  try {
    const { username, password } = request.body;
    const objeto_users = new User(username, password);
    await objeto_users.cadastro();

    response
      .status("200")
      .send(`usuário cadastrado com sucesso, bem vindo ${username}`);
  } catch (error) {
    response.status("500").send(`erro interno no servidor ${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    console.log(username, password);
    const objeto_user = new User(username, password);
    await objeto_user.login();
    const token = await objeto_user.login();
    res.status("200").send("token gerado com sucesso");
    res.json({ token });
  } catch (error) {
    res.status("500").send(`erro interno no servidor ${error.message}`);
  }
};

module.exports = {
  cadastro,
  login,
};
