const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Estado = sequelize.define('estado', {
    idestado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING(50),
    },
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'estado', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Estado = Estado;