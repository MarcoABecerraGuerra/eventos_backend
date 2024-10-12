const { Sequelize } = require('sequelize');

const engine = 'postgres';
const user = 'postgres';
const pass = '123';
const host = 'localhost';
const port = '5432';
const database = 'postgres';

const candena_conexion = `${engine}://${user}:${pass}@${host}:${port}/${database}`;

const sequelize = new Sequelize(candena_conexion, {
    dialect:'postgres',
    define: {
        raw: true, // Habilita la opción raw para todas las consultas
    }
});

module.exports = sequelize;