const { Schema, model } = require('mongoose');

const choferSchema = new Schema({
    edad:{
        type: Number,
        required: true
    },
    ingreso:{
        type: Date
    },
    kmRecorridos:{
        type: Number
    },
    nombre:{
        type: String,
        required: true
    }

    });

module.exports = model('Chofer', choferSchema);

//{ edad, ingreso, kmRecorridos, nombre }