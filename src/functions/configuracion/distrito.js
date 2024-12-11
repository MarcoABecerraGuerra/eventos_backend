const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { saveLogProcess } = require("../../utils/logProcess");
const { obtenerListaDistrito, registrarNuevoDistrito, actualizar, deleteDistrito, obtenerDistrito } = require("./distrito.service");
const model = 'DISTRITO';

const getListDistrito = async() => {

    let response = {};

    try {
        let distritoLista = await obtenerListaDistrito();
        response.message = "Lista de distritos obtenida";
        response.data = distritoLista;
        
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

const getDistrito = async(iddistrito) => {

    let response = {};

    try {
        let distritoObject = await obtenerDistrito(iddistrito);
        response.message = "Distrito obtenido";
        response.data = distritoObject;
        
        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success',
            data: response.data
        });

    } catch (error) {
        console.info('error al obtener distrito', error);
        await saveLogProcess(model, iddistrito, JSON.stringify(error), 'GET');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error',
            data: []
        });
    }
}

const registrarDistrito = async(distrito) => {

    let response = {};

    try {
        let distritoRegistrado = await registrarNuevoDistrito(distrito);
        response.message = "Distrito Registrado";
        console.info('Evento registrado', JSON.stringify(distritoRegistrado));

        if (distritoRegistrado != null) {
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
        await saveLogProcess(model, JSON.stringify(distrito), JSON.stringify(error), 'CREATE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const actualizarDistrito = async(distrito) => {

    let response = {};

    try {
        console.info('distrito', JSON.stringify(distrito));
        let distritoLista = await actualizar(distrito);
        response.message = "Distrito Registrado";
        console.info('Evento registrado', JSON.stringify(distritoLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, JSON.stringify(distrito), JSON.stringify(error), 'UPDATE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const eliminarDistrito = async(iddistrito) => {

    let response = {};

    try {
        console.info('distrito registrado', iddistrito);
        let distritoLista = await deleteDistrito(iddistrito);
        response.message = "Distrito Eliminado";
        console.info('Evento registrado', JSON.stringify(distritoLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, iddistrito, JSON.stringify(error), 'DELETE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

module.exports.getListDistrito = getListDistrito;
module.exports.registrarDistrito = registrarDistrito;
module.exports.actualizarDistrito = actualizarDistrito;
module.exports.eliminarDistrito = eliminarDistrito;
module.exports.getDistrito = getDistrito;