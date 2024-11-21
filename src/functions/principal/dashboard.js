const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerEventosMes } = require("./dashboard.service");

const getEventoXMes = async() => {

    let response = {};

    try {
        let eventoLista = await obtenerEventosMes();
        response.message = "Data de Reporte obtenido";
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

module.exports.getEventoXMes = getEventoXMes;
