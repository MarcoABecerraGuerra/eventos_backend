const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const ProcessLog = sequelize.define('process_log', {
    idprocess_log: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    proceso: {
      type: DataTypes.STRING(50),
    },
    request: {
      type: DataTypes.STRING(500),
    },
    response: {
      type: DataTypes.STRING(500),
    },
    status: {
      type: DataTypes.STRING(10),
    },
    register_date: {
      type: DataTypes.DATE,
    }
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'process_log', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.ProcessLog = ProcessLog;