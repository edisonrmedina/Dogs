import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, getAllTemperaments, postDog } from '../../redux/action';
import { Link } from 'react-router-dom';
import '../Form/DogsCreate.css';

function DogsCreateComponent() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [lifespan, setLifespan] = useState('');
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const allTemperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');
  const [showDiv, setShowDiv] = useState(true);
  const [showBackgroundEffects, setShowBackgroundEffects] = useState(true);
  const allDogs = useSelector((state) => state.dogs );
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllDogs());
      dispatch(getAllTemperaments());
    }, 100);
  }, [dispatch]);

  const handleTemperamentChange = (event) => {
    const selectedOptions = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedTemperaments(selectedOptions);
  };

  const toggleDiv = () => {
    setShowDiv(!showDiv);
    setShowBackgroundEffects(!showDiv); // Cambia el estado de los efectos de fondo al cerrar
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedOptions = Array.from(event.target.temperaments)
      .map((option, index) => option.selected ? index : -1)
      .filter(index => index !== -1);
    setSelectedTemperaments(selectedOptions);

    // Validación de campos
    const isNumeric = (value) => {
      return /^-?\d+$/.test(value);
    };

    const errors = {};
    if (!name.match(/^[a-zA-Z\s]+$/)) {
      errors.name = 'El nombre solo puede contener letras y espacios';
    }
    if (!(image.length > 50)) {
      errors.image = 'La URL de la imagen debe almenos 50 caracteres';
    }
    if (!isNumeric(lifespan)) {
      errors.lifespan = 'La esperanza de vida debe ser un número';
    }
    if (!isNumeric(weight)) {
      errors.weight = 'El peso debe ser un número';
    }
    if (!isNumeric(height)) {
      errors.height = 'La altura debe ser un número';
    }
    if (selectedOptions.length === 0) {
      errors.selectedOptions = 'Debe seleccionar al menos un temperamento';
    }

    setErrors(errors);

    // Si no hay errores, enviar el formulario
    if (Object.keys(errors).length === 0) {
      const dog = {
        id : allDogs.length + 1,
        name,
        height: height,
        weight: weight,
        lifespan: lifespan + " Years",
        temperaments: selectedOptions,
        image,
      };
      
      try {
        await dispatch(postDog(dog));
        setSuccessMessage('Raza creada de manera correcta');
      }catch(error){
        setSuccessMessage('Ocurrio un Error al crear la mascota');
      }

      

      // Restablecer los campos del formulario
      setName('');
      setHeight('');
      setWeight('');
      setLifespan('');
      setSelectedTemperaments([]);
      setImage('');
    }
  };

  return (
    <div className="form-container">
      {successMessage && (
        <div >
          <div className={`pop-up-container ${showBackgroundEffects ? 'display' : ''}`} style={{ display: showDiv ? 'block' : 'none' }}>
            <p>{successMessage}</p>
            <button onClick={toggleDiv}>Cerrar</button>
          </div>
        </div>
      )}
      <h1>Crea tu Raza</h1>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          
        </div>
        {errors.name && <p className="error">{errors.name}</p>}
        <div className='row'>
          <label htmlFor="height">Altura:</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />CM
          
        </div>
        {errors.height && <p className="error">{errors.height}</p>}
        <div className='row'>
          <label htmlFor="weight">Peso:</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />KG
          
        </div>
        {errors.weight && <p className="error">{errors.weight}</p>}
        <div >
          <label htmlFor="lifespan">Años de vida:</label>
          <input
            type="text"
            id="lifespan"
            value={lifespan}
            onChange={(event) => setLifespan(event.target.value)}
          />
          
        </div>
        {errors.lifespan && <p className="error">{errors.lifespan}</p>}
        <div>
        <div className="column">
          <label htmlFor="temperaments">Temperamentos:</label>
          <select
            multiple
            id="temperaments"
            onChange={handleTemperamentChange}
            style={{ width: '100%' }}
          >
            {allTemperaments.map((temperament) => (
              <option key={temperament.id} value={temperament}>
                {temperament}
              </option>
            ))}
          </select>
        </div>
        {selectedTemperaments.length > 0 && (
          <div >
            <p>Temperamentos seleccionados:</p>
            {selectedTemperaments.map((temperament) => (
              <button key={temperament} className="selected-temperament">
                {temperament}
              </button>
            ))}
          </div>
        )}
        
      </div>
      <br />
      {errors.selectedOptions && <p className="error">{errors.selectedOptions}</p>}
        <div className='column'>
          <label htmlFor="imageURL">URL de la imagen:</label>
          <input
            type="text"
            id="imageURL"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          
        </div>
        {errors.image && <p className="error">{errors.image}</p>}
        <div className='row'>
          <button type="submit">Enviar</button>
          
        </div>
      </form>
      <button><Link to="/Home">Inicio</Link></button>
    </div>
  );
}

export default DogsCreateComponent;
