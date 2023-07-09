const app = require('express').Router()
const { Dog, Temperament } = require('../db');
const {allDogs,dogsById,dogsByName,addDog, dogsByTemperaments} = require('../controllers')

app.get('/dogs',allDogs);
app.get('/dogs/:id',dogsById);
app.get('/dog',dogsByName);
app.get('/dogTemperament',dogsByTemperaments);
app.post('/dog',addDog);
module.exports = app