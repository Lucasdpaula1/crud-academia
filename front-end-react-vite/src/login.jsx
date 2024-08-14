import { Link } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";

import { FetchLogin } from "../services/fetchLogin";

export const Login = () => {
  const [name, setname] = useState();
  const [senha, setpassword] = useState();
  return (
    <div className="div-form">
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          FetchLogin(name, senha);
        }}
      >
        <label htmlFor="">
          digite seu nome
          <input
            type="text"
            onChange={(evento) => {
              const name = evento.target.value;
              setname(name);
            }}
          />
        </label>
        <label htmlFor="">
          digite sua senha
          <input
            type="password"
            onChange={(evento) => {
              const senha = evento.target.value;
              setpassword(senha);
            }}
          />
        </label>
        <button type="submit">enviar</button>
      </form>
      <Link to="/">volte para o menu principal</Link>
    </div>
  );
};
