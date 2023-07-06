const {Activity,Country}=require("../../db");

async function getAllData() {
    const getAll=await Activity.findAll({
        include: [Country]
    })
    if (!getAll.length) {
        throw Error("Aun no se agregaron Actividades Turisticas")
     }
    return getAll
}
module.exports=getAllData;