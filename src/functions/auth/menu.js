const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerUsuarioMenu } = require("./menu.service");

const obtenerMenubyUser = async() => {

    let response = {};

    try {

        let menu = await obtenerUsuarioMenu();
        response.message = "Menu obtenido";
        response.data = menu;

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
            data: {}
        });
    }

}

module.exports.obtenerMenubyUser = obtenerMenubyUser;