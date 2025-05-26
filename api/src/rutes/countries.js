const saveCountry= require("../handlers/Countries/saveCountries")
const dataCountry= require("../handlers/Countries/allDataCountries")
const pkDataCountries= require("../handlers/Countries/pkDataCountries")
const queryDataCountries=require("../handlers/Countries/queryDataCountries")
const {Country}=require("../db")

async function saveCountries(req,res) {
    try {
        const pais = await Country.findOne({
            where: { name: "Andorra" },
          });
          if(pais){
            try {
                const result= await dataCountry()
                 res.status(200).send(result);
             } catch (error) {
                 res.status(400).send({err:error.message});
             }
          }else{
        const result= await saveCountry()
       const Create = await Country.bulkCreate(result,{returning:true})
        res.status(200).send(Create); 
          }
  
    } catch (error) {
        res.status(500).send('Error al guardar los datos en la base de datos.');
    }
}
async function getAllCountries(req,res) {
    try {
        const result= await dataCountry()
         res.status(200).send(result);
     } catch (error) {
         res.status(400).send({err:error.message});
     }
}
async function getByIdCountries(req,res) {
        const {idPais}=req.params
    try {
        const result=await pkDataCountries(idPais)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({err:error.message})
    }
}
async function getByQueryCountries(req,res){
    const {name}=req.query
    try {
        const result= await queryDataCountries(name)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({err:error.message})
    }
}

module.exports={
saveCountries,
getAllCountries,
getByIdCountries,
getByQueryCountries,

};