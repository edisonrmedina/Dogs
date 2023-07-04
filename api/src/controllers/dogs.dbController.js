const { Dogs, Temperaments } = require("../db");

const findAllDbDogs = async () => {
  try {
    const dogsFinds = await Dogs.findAll({
      include: {
        model: Temperaments,
        attributes: ['name'],
        through: {
          attributes: []
        }
      },
    });
    
    const updatedDogs = dogsFinds.map(dog => {
      return {
        ...dog.dataValues,
        temperaments: dog.Temperaments.map(temp => temp.name)
      };
    });

    return updatedDogs || []; // Devuelve un arreglo vacío si dogsFinds es falsy
  } catch (error) {
    console.log("Error", error);
    return []; // Devuelve un arreglo vacío en caso de error
  }
};


const findDbDogById = async (id) => {
  try {
    const dog = await Dogs.findOne({
      where: { id },
      include: {
        model: Temperaments,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    });

    return dog || null; // Devuelve null si no se encuentra el perro con el ID especificado
  } catch (error) {
    console.log("Error", error);
    throw error; // O maneja el error de otra manera
  }
};

module.exports = {
  findAllDbDogs,
  findDbDogById
};
