import "./NavBar.css";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"} >
        <Button className="boton-nav" variant="contained">Inicio</Button>
      </Link>
      <Link to={"/characterPage"} >
        <Button className="boton-nav" variant="contained">Aliens</Button>
      </Link>
      <Link to={"/HumanPage"} >
        <Button className="boton-nav" variant="contained">Humans</Button>
      </Link>
      <Link to={"/about"} >
        <Button className="boton-nav" variant="contained">Acerca de</Button>
      </Link>
    </nav>
  )
}

export default NavBar