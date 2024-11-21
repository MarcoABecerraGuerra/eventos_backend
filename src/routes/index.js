const {Router} = require('express');
const { validateLogin } = require('../functions/auth/login');
const { obtenerMenubyUser } = require('../functions/auth/menu');
const { registrarDistrito, getListDistrito, actualizarDistrito, eliminarDistrito, getDistrito } = require('../functions/configuracion/distrito');
const { getListCliente, registrarCliente, actualizarCliente, eliminarCliente } = require('../functions/configuracion/cliente');
const { getListTrabajador, registrarTrabajador, actualizarTrabajador, eliminarTrabajador } = require('../functions/configuracion/trabajador');
const { getListEvent, updateEvento, saveEvent, eliminarEvento } = require('../functions/configuracion/tipo_evento');
const { getEventoXMes } = require('../functions/principal/dashboard');

const router = Router();

//Routes

// **********************
// LOGIN SERVICES
// **********************
router.post('/usuario/login', async (req, res) =>{
    const { username, pass } = req.body
    let data = await validateLogin(username, pass);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.get('/usuario/menu', async (req, res) =>{
    const { userid } = req.query
    let data = await obtenerMenubyUser();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// DISTRITO SERVICES
// **********************

router.get('/distrito', async (req, res) =>{
    let data = await getListDistrito();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.get('/distrito/obtener', async (req, res) =>{
    const { iddistrito } = req.query;
    let data = await getDistrito(iddistrito);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/distrito/crear', async (req, res) =>{
    let data = await registrarDistrito(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/distrito/editar', async (req, res) =>{
    let data = await actualizarDistrito(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/distrito/eliminar', async (req, res) =>{
    const { iddistrito } = req.query
    let data = await eliminarDistrito(iddistrito);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// CLIENTE SERVICES
// **********************

router.get('/cliente', async (req, res) =>{
    let data = await getListCliente();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/cliente/crear', async (req, res) =>{
    let data = await registrarCliente(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/cliente/editar', async (req, res) =>{
    let data = await actualizarCliente(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/cliente/eliminar', async (req, res) =>{
    const { idcliente } = req.query
    let data = await eliminarCliente(idcliente);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// TRABAJADOR SERVICES
// **********************

router.get('/trabajador', async (req, res) =>{
    let data = await getListTrabajador();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/trabajador/crear', async (req, res) =>{
    let data = await registrarTrabajador(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/trabajador/editar', async (req, res) =>{
    let data = await actualizarTrabajador(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/trabajador/eliminar', async (req, res) =>{
    const { idtrabajador } = req.query
    let data = await eliminarTrabajador(idtrabajador);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// TIPO EVENTO SERVICES
// **********************

router.get('/tipo-evento', async (req, res) =>{
    let data = await getListEvent();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/tipo-evento/crear', async (req, res) =>{
    let data = await saveEvent(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/tipo-evento/editar', async (req, res) =>{
    let data = await updateEvento(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/tipo-evento/eliminar', async (req, res) =>{
    const { idtipo_evento } = req.query
    let data = await eliminarEvento(idtipo_evento);
    res.status(data.statusCode).json(JSON.parse(data.body));
})


// **********************
// DASHBOARD SERVICES
// **********************

router.get('/dashboard/eventoxmes', async (req, res) =>{
    let data = await getEventoXMes();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

module.exports = router;