const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerListaDistrito, registrarNuevoDistrito, actualizar, deleteDistrito } = require("./distrito.service");

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
        let distritoLista = await registrarNuevoDistrito(distrito);
        response.message = "Distrito Registrado";
        console.info('Evento registrado', JSON.stringify(distritoLista));

        if (distritoLista != null) {
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