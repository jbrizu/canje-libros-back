const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const lectorSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    correo: {
        type: 'string',
        required: true
    }
});

const lectores = mongoose.model('lectores', lectorSchema);

module.exports = lectores;