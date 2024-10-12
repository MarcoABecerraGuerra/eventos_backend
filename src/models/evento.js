const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Evento = sequelize.define('evento', {
    idevento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    }
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'evento', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Evento = Evento;