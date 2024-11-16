const { Distrito } = require("../../models/distrito")

const obtenerListaDistrito = async() => {
    //Realizar query consulta a postgresql
    let distritos = null;
    try {
        distritos = await Distrito.findAll({raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return distritos;
}

const obtenerDistrito = async(param_iddistrito) => {
    //Realizar query consulta a postgresql
    let distritos = null;
    try {
        distritos = await Distrito.findOne({where:{iddistrito: param_iddistrito}},{raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return distritos;
}

const registrarNuevoDistrito = async(distrito) => {
    //Realizar query consulta a postgresql
    console.log('distrito', distrito)
    let distritos = null;
    try {
        distritos = await Distrito.create(distrito);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return distritos;
}

const actualizar = async(evento) => {
    //Realizar query consulta a postgresql
    let distritos = null;
    try {
        distritos = await Distrito.update(evento, { where: { iddistrito: evento.iddistrito} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return distritos;
}

const deleteDistrito = async(param_iddistrito) => {
    //Realizar query consulta a postgresql
    let distritos = null;
    try {
        distritos = await Distrito.destroy({where: { iddistrito: param_iddistrito} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return distritos;
}

module.exports.obtenerListaDistrito = obtenerListaDistrito;
module.exports.registrarNuevoDistrito = registrarNuevoDistrito;
module.exports.actualizar = actualizar;
module.exports.deleteDistrito = deleteDistrito;
module.exports.obtenerDistrito = obtenerDistrito;