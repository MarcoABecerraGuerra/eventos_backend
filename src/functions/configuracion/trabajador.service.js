const { Trabajador } = require("../../models/trabajador")

const obtenerListaTrabajador = async() => {
    //Realizar query consulta a postgresql
    let trabajadores = null;
    try {
        trabajadores = await Trabajador.findAll({raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return trabajadores;
}

const registrarNuevoTrabajador = async(trabajador) => {
    //Realizar query consulta a postgresql
    console.log('trabajador', trabajador)
    let trabajadores = null;
    try {
        trabajadores = await Trabajador.create(trabajador);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return trabajadores;
}

const actualizar = async(evento) => {
    //Realizar query consulta a postgresql
    let trabajadores = null;
    try {
        trabajadores = await Trabajador.update(evento, { where: { idtrabajador: evento.idtrabajador} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return trabajadores;
}

const deleteTrabajador = async(param_idtrabajador) => {
    //Realizar query consulta a postgresql
    let trabajadores = null;
    try {
        trabajadores = await Trabajador.destroy({where: { idtrabajador: param_idtrabajador} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return trabajadores;
}

module.exports.obtenerListaTrabajador = obtenerListaTrabajador;
module.exports.registrarNuevoTrabajador = registrarNuevoTrabajador;
module.exports.actualizar = actualizar;
module.exports.deleteTrabajador = deleteTrabajador;