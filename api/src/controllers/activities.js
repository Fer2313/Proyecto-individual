const createActivity=require("../handlers/Activities/createActivity")
const getAllData=require("../handlers/Activities/getAllData")

async function createActivityByBody(req,res) {
    const {countryId,name,dificulty,duration,season}=req.body
    try { 
        
        if(pais){}
        const result= await createActivity(countryId,name,dificulty,duration,season)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({err:error.message})
    }
}
async function getAllActivities(req,res) {
        const result=await getAllData()
        res.status(200).send(result)
}
module.exports={createActivityByBody,getAllActivities};