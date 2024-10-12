const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { verificarPassword, obtenerUsuario } = require("./login.service");

const validateLogin = async(username, pass) => {

    let response = {};

    try {

        let usuarioEncontrado = await obtenerUsuario(username);
        console.log('usuarioEncontrado', JSON.stringify(usuarioEncontrado));

        if (!usuarioEncontrado) {
            response.message = "Usuario no encontrado";
            return new ApiInternalErrorResponse({
                message: `${response.message}`,
                result: 'error',
                data: {}
            });
            
        }else{
            let validarPassword = await verificarPassword(pass, usuarioEncontrado.pass);
            if (validarPassword) {
                response.message = "Autenticación exitosa";
                response.data = usuarioEncontrado;
                return new ApiSuccesResponse({
                    message: `${response.message}`,
                    result: 'success',
                    data: response.data
                });
            }else{
                response.message = "Contraseña invalida";
                return new ApiInternalErrorResponse({
                    message: `${response.message}`,
                    result: 'error',
                    data: {}
                });
            }
        }
    } catch (error) {
        console.info('error al obtener listado', error);
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error',
            data: {}
        });
    }
}

module.exports.validateLogin = validateLogin;