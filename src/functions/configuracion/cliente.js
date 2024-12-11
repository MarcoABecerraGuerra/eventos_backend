const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { saveLogProcess } = require("../../utils/logProcess");
const { obtenerListaCliente, registrarNuevoCliente, actualizar, deleteCliente } = require("./cliente.service");
const model = 'CLIENTE';

const getListCliente = async() => {

    let response = {};

    try {
        let clienteLista = await obtenerListaCliente();
        response.message = "Lista de clientes obtenida";
        response.data = clienteLista;
        
        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success',
            data: response.data
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, '', JSON.stringify(error), 'GETLIST');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error',
            data: []
        });
    }
}

const registrarCliente = async(cliente) => {

    let response = {};

    try {
        let clienteLista = await registrarNuevoCliente(cliente);
        response.message = "Cliente Registrado";
        console.info('Evento registrado', JSON.stringify(clienteLista));

        if (clienteLista != null) {
            return new ApiSuccesResponse({
                message: `${response.message}`,
                result: 'success'
            });
            
        }else{
            return new ApiInternalErrorResponse({
                message: `Error no controlado: Comunicarse con administracion`,
                result: 'error'
            });
        }

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, JSON.stringify(cliente), JSON.stringify(error), 'CREATE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const actualizarCliente = async(cliente) => {

    let response = {};

    try {
        console.info('cliente', JSON.stringify(cliente));
        let clienteLista = await actualizar(cliente);
        response.message = "Distrito Registrado";
        console.info('Evento registrado', JSON.stringify(clienteLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, JSON.stringify(cliente), JSON.stringify(error), 'UPDATE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const eliminarCliente = async(idcliente) => {

    let response = {};

    try {
        console.info('cliente registrado', idcliente);
        let clienteLista = await deleteCliente(idcliente);
        response.message = "cliente Eliminado";
        console.info('Evento registrado', JSON.stringify(clienteLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, idcliente, JSON.stringify(error), 'DELETE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

module.exports.getListCliente = getListCliente;
module.exports.registrarCliente = registrarCliente;
module.exports.actualizarCliente = actualizarCliente;
module.exports.eliminarCliente = eliminarCliente;