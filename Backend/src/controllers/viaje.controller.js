const {viaje} = require("nodemon/lib/utils");
const viajCtrl = {};

const Viaje = require('../models/Viaje');


viajCtrl.createViaje = async (req,res) => {
    const { origen, destino, clima, dateIn , dateFin } = req.body;
    const newViaje = new Viaje({
        origen: origen,
        destino: destino,
        clima: clima,
        dateIn: dateIn,
        dateFin: dateFin
    })
    await newViaje.save();
//console.log(kms, chofer, modelo, num);
    res.json({message: 'Viaje Guardado'})

}

viajCtrl.getViaje = async (req,res) => {
    console.log(req.params.id)
    res.json({
        title: 'test'
    })
}

viajCtrl.getViajes = async (req,res) => {
    const viajes = await Viaje.find();
    res.json(viajes);

}



viajCtrl.updateViaje = async (req, res) => {
    const { origen, destino, clima, dateIn, dateFin } = req.body;
    await Viaje.findByIdAndUpdate(req.params.id, {
        origen,
        destino,
        clima,
        dateIn,
        dateFin
    });
    res.json('Viaje Updated');
}


viajCtrl.deleteViaje = async (req, res) => {
    await Viaje.findByIdAndDelete(req.params.id)
    res.json('Viaje Deleted');
}



module.exports = viajCtrl;

