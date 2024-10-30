import React, { useEffect, useState } from 'react'
import "./AboutPage.css"
import axios from 'axios';
import { useParams } from 'react-router-dom'
const AboutPage = () => {

  const [data, setData] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    const fetchApiRick = async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character/" + id);
      setData(response.data);

    }
    fetchApiRick();

  }, [id]);

  return (
    <div className='Home'>
      {data ? (

        <div className='contenedor-home'>
          <img className="img-home" src={data.image} alt={data.name} />
          <div className='info-home'>
            <h1 className='nombre-home'>{data.name}</h1>
            <div className='estado-tipo-home'>
              <h2 className='estado-home'>{data.status}</h2>
              <h2 className='tipo-home'>{data.species}</h2>
            </div>
            <p className='genero-home'><span>género :</span>{data.gender}</p>
            <p className='origen-home'><span>Origen :</span>{data.origin.name}</p>
          </div>
        </div>
      )
        : (
          <p>Cargando API</p>
        )}
    </div>

  )
}

export default AboutPage