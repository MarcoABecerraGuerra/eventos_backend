const { ProcessLog } = require("../models/process-log");
var moment = require('moment-timezone');

const saveLogProcess = async(process, solicitud, respuesta, estado) =>{
    let processLog = await ProcessLog.create({
        proceso: process,
        request: solicitud,
        response: respuesta,
        status: estado,
        register_date: moment().tz('America/Lima').format('YYYY-MM-DD HH:mm:ss')
    });
    return processLog;
}

module.exports.saveLogProcess = saveLogProcess;