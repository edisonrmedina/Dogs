const { findAllApiDogs, findDogsById, findAlltemperaments} = require("./dogs.apiController");
const {
    findAllDbDogs,
    findDbDogById
} = require("./dogs.dbController");

const findAllDogs = async () => {
    
    try {
      const apiDogs = await findAllApiDogs();
      const dbDogs = await findAllDbDogs() ;
      console.log(dbDogs);
      const allDogs = apiDogs.concat(dbDogs);
      return allDogs;
    } catch (e) {
      console.log(e);
      return [];
    }
};

const findDogById = async (id) => {
  try {
    const apiDog = await findDogsById(id);
    if (apiDog) {
      return apiDog;
    }
  
    const dbDog = await findDbDogById(id);
    if (dbDog) {
      return dbDog;
    }
  
    return null; // Devuelve null si no se encuentra el perro con el ID especificado en ninguna fuente
  } catch (error) {
    console.log(error);
    throw error; // O maneja el error de otra manera
  }
};

const findTemperaments = async () => {
  try {
    const temperaments = await findAlltemperaments();
    return temperaments
  } catch (error) {
    console.log(error);
    throw error; // O maneja el error de otra manera
  }
}

module.exports = {
    findAllDogs,
    findDogById,
    findTemperaments
}