var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var database = require('./modules/database');

// importar routers de colecciones
// var nombreRouter = require('./router/rutaRouter');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cors());

// middleware para prefijo rutas//app.use('/nombreRuta', nombreRouter);

app.listen( 8888, () => {
    console.log('Servidor del backend levantado en 8888');
});