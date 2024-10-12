const { Usuario } = require("../../models/usuario");
const bcrypt = require('bcrypt');


const obtenerUsuario = async(username) => {
    //Realizar query consulta a postgresql
    let usuario = null;
    try {
        usuario = await Usuario.findOne({ attributes: ['idusuario', 'nombre', 'username', 'pass'], where: { username: username } }, {raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return usuario;
}

const encriptarPassword = async(password) => {
    const saltRounds = 10; // Ajusta el número de "salt rounds" para hacer la encriptación más segura
    let hash = null;
    try {
      // Generar el hash de la contraseña
        hash = await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error('Error al encriptar la contraseña:', error);
    }
    return hash;
}

const verificarPassword = async(password, hash) => {
    let esValido = false;
    try {
        esValido = await bcrypt.compare(password.trim(), hash.trim());
    } catch (error) {
        console.error('Error al verificar la contraseña:', error);
    }
    return esValido;
}

module.exports.obtenerUsuario = obtenerUsuario;
module.exports.encriptarPassword = encriptarPassword;
module.exports.verificarPassword = verificarPassword;