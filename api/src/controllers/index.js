const { formToJSON, default: axios } = require("axios");
const { findAllDogs, findDogById,findTemperaments } = require("./dogs.api.db");
const { Dogs, Temperaments } = require("../db");

const allDogs = (req, res) => {
    findAllDogs().then((e) => {
      return res.status(200).json(e);
    });
};

const dogsById = (req, res) => {
    const id = req.params.id;
    findDogById(id).then((e) => {
      return res.status(200).json(e);
    });
};

const temperaments = (req,res) => { 
  // todo: implementar si la data ya existe en bd
    findTemperaments().then((e) => {
      return res.status(200).json(e);
    });
}

const temperamentsByName = (req,res) => { 
  // todo: implementar si la data ya existe en bd
    const id = req.params.id;
    findTemperamentsByName().then((e) => {
      return res.status(200).json(e);
    });
}

const dogsByName = async (req,res) => { 
  try {
    const {name} = req.query
    if(!name){
      res.json("No se recibio parametro Name");
    }else{
      const allDogs = await findAllDogs();
      let allDogsFinded = allDogs.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      res.json(
        allDogsFinded.length ? allDogsFinded : "I did not find the a dog"
      );
    }
  } catch (error) {
    res.json("Hubo un Error")
    
  }
}

const dogsByTemperaments = async (req, res) => {
  try {
    const { temperament } = req.query;

    if (!temperament) {
      res.json("No se recibió el parámetro Temperament");
    } else {
      const allDogs = await findAllDogs();
      const dogsByTemperament = allDogs.filter((dog) =>
        dog.temperaments.includes(temperament)
      );

      res.json(
        dogsByTemperament.length
          ? dogsByTemperament
          : "No se encontraron perros con ese temperamento"
      );
    }
  } catch (error) {
    res.json("Hubo un error");
  }
};


const addDog = async (req,res) => { 
    var { 
      name,
      height,
      weight,
      lifespan,
      temperaments,
      image,
    } = req.body;

    if(!image){
      try {
          image = await (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message;
      } catch (error) {
          console.log(error)
      }
    }

        if (name && height && weight && temperaments && image) {
        // takes that data for the new dog  
        console.log(image);
        const createDog = await Dogs.create({
            name,
            height,
            weight,
            lifespan,
            image: image || 'https://dog.ceo/api/breeds/image/random',
        });
        temperaments.map(async id => {
          const findTemp = await Temperaments.findOne({
              where: { id }
          });
          createDog.addTemperament(findTemp);
        })

        res.status(200).send(createDog);
    } else {
        res.status(404).send('Data needed to proceed is missing');
    }
}

module.exports = {
    allDogs,
    dogsById,
    temperaments,
    dogsByName,
    dogsByTemperaments,
    addDog
}