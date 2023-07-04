const axios = require("axios")
const app = require('express').Router()
const { Dog, Temperament } = require('../db');
const {allDogs,dogsById,dogsByName,addDog, dogsByTemperaments} = require('../controllers')
const  URLBASE = "https://api.thedogapi.com/v1/breeds";

// Obtener un listado de las primeras 8 razas de perro
// Debe devolver solo los datos necesarios para la ruta principal

app.get('/dogs',allDogs);
app.get('/dogs/:id',dogsById);
app.get('/dog',dogsByName);
app.get('/dogTemperament',dogsByTemperaments);
app.post('/dog',addDog);
module.exports = app