const {chofer} = require("nodemon/lib/utils");
const chofCtrl = {};

const Chofer = require('../models/Chofer');


chofCtrl.createChofer = async (req,res) => {
    const { edad, ingreso, kmRecorridos, nombre } = req.body;
    const newChofer = new Chofer({
        edad : edad,
        ingreso :  ingreso,
        kmRecorridos: kmRecorridos,
        nombre: nombre
    })
    await newChofer.save();
    res.json({message: 'Chofer Guardado'})

}

chofCtrl.getChofer = async (req,res) => {
    console.log(req.params.id)
    res.json({
        title: 'test'
    })
}

chofCtrl.getChofers = async (req,res) => {
    const drivers = await Chofer.find();
    res.json(drivers);

}



chofCtrl.updateChofer = async (req, res) => {
    const { edad, ingreso, kmRecorridos, nombre } = req.body;
    await Chofer.findByIdAndUpdate(req.params.id, {
        edad,
        ingreso,
        kmRecorridos,
        nombre
    });
    res.json('Chofer Updated');
}

chofCtrl.deleteChofer = async (req, res) => {
    await Chofer.findByIdAndDelete(req.params.id)
    res.json('Driver Deleted');
}



module.exports = chofCtrl;

