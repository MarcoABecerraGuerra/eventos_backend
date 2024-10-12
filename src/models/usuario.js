const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Usuario = sequelize.define('usuario', {
    idusuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(250),
    },
    username: {
      type: DataTypes.STRING(50),
    },
    pass: {
      type: DataTypes.STRING(250),
    },
    estado: {
      type: DataTypes.BOOLEAN,
    },
    aud_fecha_creacion: {
      type: DataTypes.DATE,
    },
    aud_usuario_creacion: {
        type: DataTypes.INTEGER,
    },
    aud_fecha_modificacion: {
        type: DataTypes.DATE,
    },
    aud_usuario_modificacion: {
        type: DataTypes.INTEGER,
    },
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'usuario', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Usuario = Usuario;