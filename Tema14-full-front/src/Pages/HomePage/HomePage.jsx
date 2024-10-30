import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./HomePage.css";
import { Link } from 'react-router-dom';
const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiRick = async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character/");
      setData(response.data.results);

    }
    fetchApiRick();
  }, []);

  return (
    <div className='Home'>
      {data.length > 0 ? data.map((result) => (
        <Link to={`/AboutPage/${result.id}`} key={result.id} className='contenedor-home'>
          <img className="img-home" src={result.image} alt={result.name} />
          <div className='info-home'>
            <h1 className='nombre-home'>{result.name}</h1>
            <div className='estado-tipo-home'>
              <h2 className='estado-home'>{result.status}</h2>
              <h2 className='tipo-home'>{result.species}</h2>
            </div>
            <p className='genero-home'><span>género :</span>{result.gender}</p>
            <p className='origen-home'><span>Origen :</span>{result.origin.name}</p>
          </div>
        </Link>
      )) : (
        <p>Cargando API</p>
      )}
    </div>

  )
}

export default HomePage