const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');
const { Cliente } = require('./cliente');
const { Trabajador } = require('./trabajador');
const { TipoEvento } = require('./tipo-evento');
const { Distrito } = require('./distrito');
const { Estado } = require('./estado');

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

Contratacion.belongsTo(Cliente, { foreignKey: "idcliente" });
Contratacion.belongsTo(Trabajador, { foreignKey: "idtrabajador" });
Contratacion.belongsTo(TipoEvento, { foreignKey: "idtipo_evento" });
Contratacion.belongsTo(Distrito, { foreignKey: "iddistrito" });
Contratacion.belongsTo(Estado, { foreignKey: "idestado" });

module.exports.Contratacion = Contratacion;