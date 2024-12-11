const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerListaTrabajador, registrarNuevoTrabajador, actualizar, deleteTrabajador } = require("./trabajador.service");
const model = 'TRABAJADOR';

const getListTrabajador = async() => {

    let response = {};

    try {
        let trabajadorLista = await obtenerListaTrabajador();
        response.message = "Lista de trabajadores obtenida";
        response.data = trabajadorLista;
        
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

const registrarTrabajador = async(trabajador) => {

    let response = {};

    try {
        let trabajadorLista = await registrarNuevoTrabajador(trabajador);
        response.message = "Trabajador Registrado";
        console.info('Evento registrado', JSON.stringify(trabajadorLista));

        if (trabajadorLista != null) {
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
        await saveLogProcess(model, JSON.stringify(trabajador), JSON.stringify(error), 'CREATE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const actualizarTrabajador = async(trabajador) => {

    let response = {};

    try {
        console.info('trabajador', JSON.stringify(trabajador));
        let trabajadorLista = await actualizar(trabajador);
        response.message = "Distrito Registrado";
        console.info('Evento registrado', JSON.stringify(trabajadorLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, JSON.stringify(trabajador), JSON.stringify(error), 'UPDATE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const eliminarTrabajador = async(idtrabajador) => {

    let response = {};

    try {
        console.info('trabajador registrado', idtrabajador);
        let trabajadorLista = await deleteTrabajador(idtrabajador);
        response.message = "Trabajador Eliminado";
        console.info('Evento registrado', JSON.stringify(trabajadorLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        await saveLogProcess(model, idtrabajador, JSON.stringify(error), 'DELETE');
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

module.exports.getListTrabajador = getListTrabajador;
module.exports.registrarTrabajador = registrarTrabajador;
module.exports.actualizarTrabajador = actualizarTrabajador;
module.exports.eliminarTrabajador = eliminarTrabajador;