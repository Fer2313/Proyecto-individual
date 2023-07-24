const {Activity,Country}=require("../../db");

async function getAllData() {
    const getAll=await Activity.findAll({
        include: [Country]
    })
    return getAll
}
module.exports=getAllData;