const { Router } = require('express');
const {saveCountries,getAllCountries,getByIdCountries,getByQueryCountries }=require("../controllers/countries")
const {createActivityByBody,getAllActivities}=require("../controllers/activities")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
router.get("/",(req,res)=>saveCountries(req,res));
router.get("/countries",(req,res)=>req.query.name?getByQueryCountries(req,res):getAllCountries(req,res));
router.get("/countries/:idPais",(req,res)=>getByIdCountries(req,res))
router.get("/activities",(req,res)=> getAllActivities(req,res))
router.post("/activities",(req,res)=> createActivityByBody(req,res))

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
module.exports = router;
