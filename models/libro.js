const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const libroSchema = new Schema({
    titulo: {
        type: 'string',
        required: true
    },
    autor: {
        type: 'string',
        required: true
    },
    editorial: {
        type: 'string',
        required: true
    },
    estado: {
        type: 'String',
        default: "B"
    },
    cantidad: {
        type: 'number',
        default: '1'
    }
});

const Libro = mongoose.model('libro', libroSchema);

module.exports = Libro;