import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav-main">
      <Link to="/login " className="link-nav">
        login
      </Link>
      <Link to="/cadastro " className="link-nav">
        cadastro
      </Link>
      <Link to="/pefil" className="link-nav">
        {" "}
        venha ver o seu perfil doçura
      </Link>
    </nav>
  );
};
