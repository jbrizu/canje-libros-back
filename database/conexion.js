const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGOATLAS;

const conexion =  mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Conexión Correcta a DB.');
})

mongoose.connection.on('error', () => {
    console.log('Error en mi Conexión a DB.');
})

module.exports = conexion;
