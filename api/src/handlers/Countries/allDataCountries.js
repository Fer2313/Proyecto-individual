const {Country,Activity}=require("../../db");
async function allDataCountries() {
   const seeCountries= await Country.findAll({
      include: {
         model: Activity,
         attributes: ["name"]
     }
   })
   if (!seeCountries.length) {
      throw Error("Aun no se agregaron paises")
   }
   return seeCountries
}
module.exports=allDataCountries;