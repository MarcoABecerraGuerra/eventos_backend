const { Evento } = require("../../models/evento")

const obtenerEventos = async() => {
    //Realizar query consulta a postgresql
    let eventos = null;
    try {
        eventos = await Evento.findAll({raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return eventos;
}

const registrarEventos = async(evento) => {
    //Realizar query consulta a postgresql
    let eventos = null;
    try {
        eventos = await Evento.create(evento);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return eventos;
}

module.exports.obtenerEventos = obtenerEventos;
module.exports.registrarEventos = registrarEventos;