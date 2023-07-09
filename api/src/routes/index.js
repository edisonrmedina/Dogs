const { Router } = require('express');
const dogRoutes = require('./dogsRoutes.js');
const temperamentsRoutes = require('./routesTemperaments.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', (req,res) => { 
    res.status(200).json({
        message:"Bienvenidos a mi Backend"
    })
 })
router.use('/', dogRoutes)
router.use('/', temperamentsRoutes);
module.exports = router;