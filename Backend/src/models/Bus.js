const { Schema, model } = require('mongoose');

const busSchema = new Schema({
    kms:{
        type: Number,
        required: true

    },
    chofer:{
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    num:{
        type: Number,
        required: true,
    }
});
module.exports = model('Bus', busSchema);