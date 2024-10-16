const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Distrito = sequelize.define('distrito', {
    iddistrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(200),
    }
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'distrito', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Distrito = Distrito;