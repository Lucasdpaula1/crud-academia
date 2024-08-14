import { useEffect } from "react";

export const FetchLogin = async (username, password) => {
  const formdat = new FormData();
  formdat.append("username", username);
  formdat.append("password", password);
  const reponse = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-type": "applicatoin/json",
    },
    body: JSON.stringify({
      username: "deni",
      password: "12",
    }),
    mode: "cors",
  });
  const data = await reponse.text();
  console.log(data);
};
