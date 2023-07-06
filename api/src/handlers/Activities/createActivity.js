const {Activity}=require("../../db");
async function createActivity(countryId,name,dificulty,duration,season) {
    console.log(countryId,name,dificulty,duration,season)
    
if (countryId===undefined||name===undefined||dificulty===undefined||duration===undefined||season===undefined){
    throw Error("Faltan datos a completar")    
}
const newActivity=await Activity.create({name:name,dificulty:dificulty,duration:duration,season:season})
await newActivity.setCountries(countryId)
return newActivity
}

module.exports=createActivity;