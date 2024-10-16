const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Trabajador = sequelize.define('trabajador', {
    idtrabajador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(200),
    },
    experiencia: {
      type: DataTypes.INTEGER,
    },
    disponible: {
      type: DataTypes.BOOLEAN,
    },
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'trabajador', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Trabajador = Trabajador;