const { Schema, model } = require('mongoose');

const servSchema = new Schema({
    costo:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    refacciones:{
        type: String,
        required: true
    },
    mecanico:{
        type: String,
        required: true
    }
});
module.exports = model('Servicio', servSchema);