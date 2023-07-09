const { findAllApiDogs, findDogsById, findAlltemperaments} = require("./dogs.apiController");
const {
    findAllDbDogs,
    findDbDogById
} = require("./dogs.dbController");

const findAllDogs = async (origin) => {
    try {
      const apiDogs = await findAllApiDogs();
      const dbDogs = await findAllDbDogs() ;
      const allDogs = apiDogs.concat(dbDogs);
      console.log(allDogs);
      switch(origin) {
        case "bd":
          return dbDogs;
        case "api":
          return apiDogs;
        case "all":
            return allDogs;
        default :
          return allDogs;
      }
      
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
  
    return null; 
  } catch (error) {
    console.log(error);
    throw error; 
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