import "./NavBar.css";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"} >
        <Button className="boton-nav" variant="contained">Inicio</Button>
      </Link>

      <Link to={"/ListFavorite"} >
        <Button className="boton-nav" variant="contained">Favoritos</Button>
      </Link>

    </nav>
  )
}

export default NavBar