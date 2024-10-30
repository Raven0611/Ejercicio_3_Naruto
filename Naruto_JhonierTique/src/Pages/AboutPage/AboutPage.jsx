import React, { useEffect, useState } from 'react';
import "./AboutPage.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchApiNaruto = async () => {
      const response = await axios.get("https://dattebayo-api.onrender.com/characters/" + id);
      setData(response.data);
      console.log("HOLAA");
      console.log(response.data);
    }
    fetchApiNaruto();
  }, [id]);

  // Función para cambiar la imagen del carrusel
  const nextImage = () => {
    if (data && currentIndex < data.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='about-page'>
      {data ? (
        <div className='contenedor-about-page'>
          <div className="carrusel">
            <button onClick={prevImage} disabled={currentIndex === 0}>❮</button>
            <img className="img-about-page" src={data.images[currentIndex]} alt={data.name} />
            <button onClick={nextImage} disabled={currentIndex === data.images.length - 1}>❯</button>
          </div>
          <div className='info-about-page'>
            <h1 className='nombre-about-page'>{data.name}</h1>
            <div className='about-about-page'>
              <h2 className='clan-about-page'>CLAN :{data.personal.clan}</h2>
            </div>
            <p className='genero-about-page'><span>género :</span> {data.personal.sex}</p>
            <p className='cumpleanos-about-page'><span>Cumpleaños :</span> {data.personal.birthdate}</p>
          </div>
        </div>
      ) : (
        <p>Cargando API</p>
      )}
    </div>
  )
}

export default AboutPage;
