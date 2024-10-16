const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Contratacion = sequelize.define('contratacion', {
    idcontratacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idcliente: {
      type: DataTypes.INTEGER,
    },
    idtrabajador: {
      type: DataTypes.INTEGER,
    },
    idtipo_evento: {
      type: DataTypes.INTEGER,
    },
    iddistrito: {
      type: DataTypes.INTEGER,
    },
    idestado: {
      type: DataTypes.INTEGER,
    },
    fecha_evento: {
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.DECIMAL,
    },
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'contratacion', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Contratacion = Contratacion;