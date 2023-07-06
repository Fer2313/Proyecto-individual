const { Sequelize } = require("sequelize");
const {Country}=require("../../db");
async function getByQueryCountries(name) {
    const pais= await Country.findOne({
        where:{name:{[Sequelize.Op.iLike]:`%${name}%`}},
    })
     if (!pais) {
        throw Error("No existe un pais con ese nombre")
     }
     return pais
}
module.exports=getByQueryCountries;