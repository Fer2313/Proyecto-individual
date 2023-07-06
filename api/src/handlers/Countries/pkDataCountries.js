const {Country,Activity}=require("../../db");

async function pkDataCountries(id) {
    const pais = await Country.findOne({
        where: { id: id },
        include: [Activity]
      });
    if (!pais) {
        throw Error("No se encontro un pais con esa id")
    }
   return pais
}

module.exports=pkDataCountries;