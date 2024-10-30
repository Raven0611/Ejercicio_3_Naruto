import "./ListFavorite.css";
import React, { useEffect, useState } from 'react';
import { fetchCollectionData } from "../../FirebaseConfig"; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

const ListFavorite = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchCollectionData();
            setData(result);
        };

        fetchData();
    }, []); // Ejecuta solo una vez cuando se monta el componente

    return (
        <div className='Home'>
            {data.length > 0 ? (
                data.map((result) => (
                    <div className="casa" key={result.id}> {/* Asegúrate de agregar una key única */}
                        <Link to={`/AboutPage/${result.id}`} className='contenedor-home'>
                            <img className="img-home" src={result.image} alt={result.name} /> {/* Usa result.image si has definido eso en el guardado */}
                            <div className='info-home'>
                                <h1 className='nombre-home'>{result.name}</h1>
                                <div className='estado-tipo-home'>
                                    <h2 className='estado-home'>CLAN: {result.clan}</h2> {/* Usa result.clan */}
                                </div>
                                <p className='genero-home'><span>género:</span> {result.gender}</p> {/* Usa result.gender */}
                                <p className='origen-home'><span>Cumpleaños:</span> {result.birthdate}</p> {/* Usa result.birthdate */}
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>NO HAY NADA</p>
            )}
        </div>
    );
};

export default ListFavorite;
