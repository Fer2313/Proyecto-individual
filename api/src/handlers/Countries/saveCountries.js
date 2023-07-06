const axios=require("axios");
  async function saveCountries(){
   const datos =await axios.get("https://restcountries.com/v3/all")
   const arr=datos.data
   console.log(arr)
  newDates=arr.map(item=>{
return {
id:item.cca3,
name:item.name.common,
image:item.flags[1],
continent:item.continents[0],
capital:item.capital?item.capital[0]:"No tiene",
subregion:item.subregion,
area:item.area,
population:item.population,
}
})

 return newDates
}
module.exports=saveCountries;