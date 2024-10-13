const express = require('express');
const app = express();

//Opciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(express.json());

// Configurar manualmente las cabeceras CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Permitir solicitudes desde http://localhost:4200
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Cabeceras permitidas
    next();
});

//Routes
app.use(require('./routes/index'));

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en http://localhost:${app.get('port')}`);
});

