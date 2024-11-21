const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerEventos, registrarEventos, actualizarEvento, deleteEvento } = require("./tipo_evento.service");

const getListEvent = async() => {

    let response = {};

    try {
        let eventoLista = await obtenerEventos();
        response.message = "Lista de clientes obtenida";
        response.data = eventoLista;

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

const saveEvent = async(evento) => {

    let response = {};

    try {
        let eventoLista = await registrarEventos(evento);
        response.message = "Evento Registrado";
        console.info('Evento registrado', JSON.stringify(eventoLista));

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

const updateEvento = async(distrito) => {

    let response = {};

    try {
        let eventoUpdate = await actualizarEvento(distrito);
        response.message = "Evento Actualizado";
        console.info('Evento actualizado', JSON.stringify(eventoUpdate));

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

const eliminarEvento = async(idtipo_evento) => {

    let response = {};

    try {
        let eventoDeleted = await deleteEvento(idtipo_evento);
        response.message = "Tipo Evento Eliminado";
        console.info('Evento Eliminado', JSON.stringify(eventoDeleted));

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

module.exports.getListEvent = getListEvent;
module.exports.saveEvent = saveEvent;
module.exports.updateEvento = updateEvento;
module.exports.eliminarEvento = eliminarEvento;