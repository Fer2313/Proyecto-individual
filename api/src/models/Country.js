const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('country', {
    id:{
     type: DataTypes.STRING(3),
     primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
       allowNull:false,
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    area:{
     type:DataTypes.FLOAT,
      allowNull:true,
    },
    population:{
    type:DataTypes.INTEGER,
    allowNull:false,
    }
  },
  {
    timestamps:false
  });

};
