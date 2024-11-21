const { Cliente } = require("../../models/cliente")

const obtenerListaCliente = async() => {
    //Realizar query consulta a postgresql
    let clientes = null;
    try {
        clientes = await Cliente.findAll({raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return clientes;
}

const registrarNuevoCliente = async(cliente) => {
    //Realizar query consulta a postgresql
    console.log('cliente', cliente)
    let clientes = null;
    try {
        clientes = await Cliente.create(cliente);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return clientes;
}

const actualizar = async(evento) => {
    //Realizar query consulta a postgresql
    let clientes = null;
    try {
        clientes = await Cliente.update(evento, { where: { idcliente: evento.idcliente} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return clientes;
}

const deleteCliente = async(param_idcliente) => {
    //Realizar query consulta a postgresql
    let clientes = null;
    try {
        clientes = await Cliente.destroy({where: { idcliente: param_idcliente} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return clientes;
}

module.exports.obtenerListaCliente = obtenerListaCliente;
module.exports.registrarNuevoCliente = registrarNuevoCliente;
module.exports.actualizar = actualizar;
module.exports.deleteCliente = deleteCliente;