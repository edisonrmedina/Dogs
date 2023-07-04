import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dogDetail, getAllDogs } from '../../redux/action';
import './DetailDog.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const DetailDog = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(dogDetail(id));
  }, [id]);

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
            {details?.temperaments?.map((temperament, index) => (
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
