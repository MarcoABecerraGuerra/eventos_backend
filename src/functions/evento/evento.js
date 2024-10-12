const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerEventos, registrarEventos } = require("./evento.service");

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

module.exports.getListEvent = getListEvent;
module.exports.saveEvent = saveEvent;