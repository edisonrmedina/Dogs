const axios = require("axios");
const { Temperaments}  = require('../db')
const findAllApiDogs = async () => {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds');
      const data = response.data.map(item => {
        const { id, image, name, height, weight, life_span, temperament } = item;
        return {
          id,
          image: image.url,
          name,
          height: height.metric,
          weight: weight.metric,
          lifespan: life_span,
          temperaments: temperament ? temperament.split(", ") : []
        };
      });
      // Realizar las operaciones necesarias con los datos obtenidos
      
      return data;
    } catch (error) {
      console.log(error);
      throw error; // O maneja el error de otra manera
    }
};

const findDogsById = async (id) => {
    console.log(id);
    try {
      const dogs = await findAllApiDogs();
      console.log(dogs);
      const dogById = dogs.find(item => item.id == id);
      return dogById; // Devuelve null si no se encuentra
    } catch (error) {
      console.log(error);
      throw error; // O maneja el error de otra manera
    }
};

const findAlltemperaments = async () => {
  const uniqueTemperaments = new Set();
  try {
    const allData = await findAllApiDogs();
    
    allData.map(dog => {
      dog.temperaments.map(temperament => {
        uniqueTemperaments.add(temperament);
      })
    });

    uniqueTemperaments.forEach(async temperament => {
      const temperamentCreated = await Temperaments.create({
        name: temperament,
      });
    });
 
    return Array.from(uniqueTemperaments)
    
  } catch (error) {

  }
};

module.exports = {
    findAllApiDogs,
    findDogsById,
    findAlltemperaments
};
