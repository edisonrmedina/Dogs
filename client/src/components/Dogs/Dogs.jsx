import React, { useState, useEffect } from 'react';
import './Dogs.css';
import { Link } from 'react-router-dom';

const Dogs = ({ dogs }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className='loader-container'>
        <div className='loader'></div>
      </div>
    );
  }

  if (dogs.length === 0) {
    return <p className='card-content-no-found'>Raza no encontrado</p>;
  }

  return (
    <section className='dogs'>
      {dogs.map((dog) => (
        <div key={dog.id} className='card'>
          <div>
            <Link to={`/detail/${dog.id}`}>
              <img src={dog.image} alt={dog.name} />  
            </Link>
          </div>
          <div className='contenido'>
            <div className="name">
              <h4>{dog.name}</h4>
            </div>
            <div className="contenido">
              <p>Height: {dog.height}</p>
              <p>Weight: {dog.weight}</p>
              <p>Lifespan: {dog.lifespan}</p>
              <div className="temperaments ">
                <ul>
                  {dog.temperaments.map((temperament, index) => (
                    <li key={index}>{temperament}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dogs;
