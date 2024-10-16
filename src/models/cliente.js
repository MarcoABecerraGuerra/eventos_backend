const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Cliente = sequelize.define('cliente', {
    idcliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(250),
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    direccion: {
      type: DataTypes.STRING(250),
    },
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'cliente', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Cliente = Cliente;