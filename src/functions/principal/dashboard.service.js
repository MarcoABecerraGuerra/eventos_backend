const { Sequelize } = require('sequelize');
const sequelize = require('../../utils/postgreSQL');

const obtenerEventosMes = async() => {
    //Realizar query consulta a postgresql
    let trabajadores = null;
    try {
        const resultados = await sequelize.query(
            `SELECT 
         TO_CHAR(fecha_evento, 'FMMonth') AS mes,
         COUNT(*) AS cantidad_eventos
       FROM contratacion
       GROUP BY mes, fecha_evento
       ORDER BY fecha_evento;`,
            {
              type: Sequelize.QueryTypes.SELECT // Indica que solo quieres los datos como resultado
            }
        );
        trabajadores = resultados;
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return trabajadores;
}

module.exports.obtenerEventosMes = obtenerEventosMes;