 function Validations({array,nombre,duration,dificulty,season}) {
    const errors={}

    if(nombre.length===0) {
        errors.nombre="Write the name of the activity"
       }
       if (nombre.length>15) {
         errors.nombre="No puede superar lo 15 caracteres"
       }
     else if (dificulty===undefined) {
        errors.dificulty="Choose the difficulty"
       }
       else if (duration.length===0) {
        errors.duration="Put the duration of the activity"
       }
    else if(season===undefined) {
        errors.season="Choose the season"
       }
    else if(!array.length) {
       errors.arr="Choose the country that relates"
        }     
       console.log(errors)
       return errors
}

module.exports={
Validations,

}
