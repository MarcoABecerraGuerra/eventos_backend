const { Cliente } = require("../../models/cliente");
const { Contratacion } = require("../../models/contratacion");
const { Distrito } = require("../../models/distrito");
const { Estado } = require("../../models/estado");
const { TipoEvento } = require("../../models/tipo-evento");
const { Trabajador } = require("../../models/trabajador");

const obtenerListaContratacion = async() => {
    //Realizar query consulta a postgresql
    let contrataciones = null;
    try {
        contrataciones = await Contratacion.findAll({
            include: [
            {
              model: Cliente,
              attributes: ["nombre"], // Solo incluye el campo 'nombre'
            },
            {
              model: Trabajador,
              attributes: ["nombre"], // Campo 'nombre' de Trabajador
            },
            {
              model: TipoEvento,
              attributes: ["nombre"], // Campo 'nombre' de TipoEvento
            },
            {
              model: Distrito,
              attributes: ["nombre"], // Campo 'nombre' de Distrito
            },
            {
              model: Estado,
              attributes: ["descripcion"], // Campo 'nombre' de Estado
            },
          ],}, {raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return contrataciones;
}

const registrarNuevoContratacion = async(contrataciones) => {
    //Realizar query consulta a postgresql
    console.log('Contratacion', contrataciones)
    let contratacionRegistrada = null;
    try {
        contratacionRegistrada = await Contratacion.create(contrataciones);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return contratacionRegistrada;
}

const actualizar = async(evento) => {
    //Realizar query consulta a postgresql
    let contrataciones = null;
    try {
        contrataciones = await Contratacion.update(evento, { where: { idcontratacion: evento.idcontratacion} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return contrataciones;
}

const deleteContratacion = async(param_idcontratacion) => {
    //Realizar query consulta a postgresql
    let contrataciones = null;
    try {
        contrataciones = await Contratacion.destroy({where: { idcontratacion: param_idcontratacion} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return contrataciones;
}

module.exports.obtenerListaContratacion = obtenerListaContratacion;
module.exports.registrarNuevoContratacion = registrarNuevoContratacion;
module.exports.actualizar = actualizar;
module.exports.deleteContratacion = deleteContratacion;