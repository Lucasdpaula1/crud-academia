require("dotenv").config();
const mysql2 = require("mysql2/promise");
const getDbConnection = async () => {
  const db = await mysql2.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT_DATABASE,
  });
  db.connect((err) => {
    if (err) {
      console.log("não foi possivel estabelecer a conexão ");
    }
    console.log("foi possivel estabele3ce a conexão");
  });
  return db;
};

// db.connect((err) => {
//   if (err) {
//     console.log("não foi possivel fazer a conexão com o bancod e dados", err);
//   } else {
//     console.log(
//       "conexxão efeituada com sucessol, bem vindo ao ",
//       process.env.DB_NAME
//     );
//   }
// });

getDbConnection();
console.log("ola mundo");
module.exports = getDbConnection;
