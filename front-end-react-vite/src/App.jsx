import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Nav } from "./nav";
import { Route, Routes } from "react-router-dom";
import { Login } from "./login";
import { Home } from "./home";
import { Cadastro } from "./cadastro";
import { Profile } from "./profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route index Component={Home} />
        <Route path="/cadastro" Component={Cadastro} />
        <Route path="/pefil" Component={Profile} />
      </Routes>
    </>
  );
}

export default App;
