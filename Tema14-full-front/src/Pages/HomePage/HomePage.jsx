import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./HomePage.css";
import { saveCharacterToFavorites } from "../../FirebaseConfig";
import { Link } from 'react-router-dom';
const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiNaruto = async () => {
      const response = await axios.get("https://dattebayo-api.onrender.com/characters");
      console.log(response.data.characters);
      setData(response.data.characters);

    }
    fetchApiNaruto();
  }, []);

  return (
    <div className='Home'>
      {data.length > 0 ? data.map((result) => (
        <div className="casa">
          <Link to={`/AboutPage/${result.id}`} className='contenedor-home'>
            <img className="img-home" src={result.images[0]} alt={result.name} />
            <div className='info-home'>
              <h1 className='nombre-home'>{result.name}</h1>
              <div className='estado-tipo-home'>

                <h2 className='estado-home'>CLAN :{result.personal.clan}</h2>
              </div>
              <p className='genero-home'><span>género :</span> {result.personal.sex}</p>
              <p className='origen-home'><span>Cumpleaños :</span> {result.personal.birthdate}</p>
            </div>
          </Link>
          {/* Botón en la esquina superior derecha */}
          <input
            className='boton-home'
            type="button"
            value="♥"
            onClick={(e) => {
              e.stopPropagation(); // Previene que el clic se propague al Link
              console.log(`Botón de ${result.name} presionado`);
              saveCharacterToFavorites(result);
            }}
          />
        </div>

      )) : (
        <p>Cargando API</p>
      )}
    </div>

  )
}

export default HomePage