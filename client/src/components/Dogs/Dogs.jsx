import React from 'react';
import './Dogs.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Dogs = ({ dogs }) => {
  if (dogs.length === 0) {
    return <div>Loading...</div>; // Muestra un loader cuando la lista de perros está vacía
  }

  return (
    <section className='dogs'>
      {dogs.map((dog) => (
        <div key={dog.id} className='card'>
          <div>
            <Link to ={`/detail/${dog.id}`}>
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
              <div className="temperaments">
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
