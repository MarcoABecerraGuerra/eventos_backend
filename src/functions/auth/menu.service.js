const { Menu } = require("../../models/menu");
const { Sequelize, Op } = require("sequelize");

const obtenerUsuarioMenu = async() => {
    //Realizar query consulta a postgresql
    let menu = null;
    try {
        menu = await Menu.findAll({raw: true});
        const opcionesPorId = {};
        menu.forEach(opcion => {
            opcionesPorId[opcion.idmenu] = { ...opcion, subopciones: [] };
        });
        const opcionesJerarquicas = [];
        menu.forEach(opcion => {
        if (opcion.idpadre === 0) {
            opcionesJerarquicas.push(opcionesPorId[opcion.idmenu]);
        } else {
            const padre = opcionesPorId[opcion.idpadre];
            if (padre) {
            padre.subopciones.push(opcionesPorId[opcion.idmenu]);
            }
        }
        });
        menu = opcionesJerarquicas;

    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return menu;
}

module.exports.obtenerUsuarioMenu = obtenerUsuarioMenu;