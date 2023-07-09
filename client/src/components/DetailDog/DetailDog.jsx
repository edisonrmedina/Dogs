import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearDetail, dogDetail, getAllDogs } from '../../redux/action';
import './DetailDog.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const DetailDog = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  let mapTemp = {};
  useEffect(() => {
    dispatch(dogDetail(id));
    return dispatch(clearDetail());
  }, [id]);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    
  }, []);
  debugger;
  if(details.Temperaments) {
     mapTemp = details.Temperaments.map((temperament) => temperament.name);
  }else{
     mapTemp = details.temperaments;
  }
  if (isLoading) {
    return (
      <div className='loader-container'>
        <div className='loader'></div>
      </div>
    );
  }

  if (!details) {
    return <p className='card-content-no-found'>Raza no encontrado</p>;
  }

  return (
    <div className='parent-card-detail'>
      <div className='card-detail'>
      <h1>{details?.name}</h1>
      {details && (
        <div>
          <img src={details?.image} alt={details?.name} />
          <h2>{details?.name}</h2>
          <p>Height: {details?.height}</p>
          <p>Weight: {details?.weight}</p>
          <p>Lifespan: {details?.lifespan}</p>
          <div>
            {mapTemp?.map((temperament, index) => (
              <button key={index} className="temperament-button">{temperament}</button>
            ))}
          </div>
        </div>
      )}
      
    </div>
    <Link to ='/home'>
      <button className="buttom-home">Home</button>
    </Link>
    
    </div>
  );
};

export default DetailDog;
