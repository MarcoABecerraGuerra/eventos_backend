const { TipoEvento } = require("../../models/tipo-evento")

const obtenerEventos = async() => {
    //Realizar query consulta a postgresql
    let eventos = null;
    try {
        eventos = await TipoEvento.findAll({raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return eventos;
}

const registrarEventos = async(evento) => {
    //Realizar query consulta a postgresql
    let eventos = null;
    try {
        eventos = await TipoEvento.create(evento);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return eventos;
}

const actualizarEvento = async(eventoUpd) => {
    //Realizar query consulta a postgresql
    console.log('eventoUpd', eventoUpd);
    let evento = null;
    try {
        evento = await TipoEvento.update(eventoUpd, { where: { idtipo_evento: eventoUpd.idtipo_evento} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return evento;
}

const deleteEvento = async(idtipoevento) => {
    //Realizar query consulta a postgresql
    let evento = null;
    try {
        evento = await TipoEvento.destroy({where: { idtipo_evento: idtipoevento} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return evento;
}

module.exports.obtenerEventos = obtenerEventos;
module.exports.registrarEventos = registrarEventos;
module.exports.actualizarEvento = actualizarEvento;
module.exports.deleteEvento = deleteEvento;