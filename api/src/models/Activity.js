const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    dificulty:{
        type:DataTypes.INTEGER,
        defaultValue:1,
        validate:{
         min:1,
         max:5,
        },
        allowNull:false,
    },
    duration:{
        type:DataTypes.TIME,
        allowNull:true,
    },
    season:{
        type:DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"),
        allowNull:false,
    },
   
  },
  {
    timestamps:false
   });
 
};
