const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerListaContratacion, registrarNuevoContratacion, actualizar, deleteContratacion } = require("./contratacion.service");

const getListContratacion = async() => {

    let response = {};

    try {
        let contratacionLista = await obtenerListaContratacion();
        response.message = "Lista de contrataciones obtenida";
        response.data = contratacionLista;
        
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

const registrarContratacion = async(contratacion) => {

    let response = {};

    try {
        let contratacionLista = await registrarNuevoContratacion(contratacion);
        response.message = "contratacion Registrado";
        console.info('Evento registrado', JSON.stringify(contratacionLista));

        if (contratacionLista != null) {
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

const actualizarContratacion = async(contratacion) => {

    let response = {};

    try {
        console.info('contratacion', JSON.stringify(contratacion));
        let contratacionLista = await actualizar(contratacion);
        response.message = "Distrito Registrado";
        console.info('Evento registrado', JSON.stringify(contratacionLista));

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

const eliminarContratacion = async(idcontratacion) => {

    let response = {};

    try {
        console.info('contratacion registrado', idcontratacion);
        let contratacionLista = await deleteContratacion(idcontratacion);
        response.message = "contratacion Eliminado";
        console.info('Evento registrado', JSON.stringify(contratacionLista));

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

module.exports.getListContratacion = getListContratacion;
module.exports.registrarContratacion = registrarContratacion;
module.exports.actualizarContratacion = actualizarContratacion;
module.exports.eliminarContratacion = eliminarContratacion;