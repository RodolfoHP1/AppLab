const { Schema, model } = require('mongoose');

const viajeSchema = new Schema({
    origen:{
        type: String,
        required: true
    },
    destino:{
        type: String,
        required: true
    },
    clima:{
        type: String,
        required: true
    },
    dateIn: Date,
    dateFin: Date

}
    , {
        timestamps: true
    });
module.exports = model('Viaje', viajeSchema);