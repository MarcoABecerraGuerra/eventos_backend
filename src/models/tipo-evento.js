const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const TipoEvento = sequelize.define('tipo_evento', {
    idtipo_evento: {
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
    tableName: 'tipo_evento', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.TipoEvento = TipoEvento;