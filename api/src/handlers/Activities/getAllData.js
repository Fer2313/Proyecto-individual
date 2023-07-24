const {Activity,Country}=require("../../db");

async function getAllData() {
    const getAll=await Activity.findAll({
        include: [Country]
    })
    if (!getAll.length) {
        throw Error("No hay actividades aun")
    }
    return getAll
}
module.exports=getAllData;