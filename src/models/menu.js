const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Menu = sequelize.define('menu', {
    idmenu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(250),
    },
    orden: {
      type: DataTypes.INTEGER,
    },
    idpadre: {
      type: DataTypes.INTEGER,
    },
    ruta: {
      type: DataTypes.STRING(250),
    },
    estado: {
      type: DataTypes.BOOLEAN,
    },
    icono: {
        type: DataTypes.STRING(50),
    },
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'menu', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Menu = Menu;