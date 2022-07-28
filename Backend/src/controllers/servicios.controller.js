const {servicio} = require("nodemon/lib/utils");
const servCtrl = {};

const Servicio = require('../models/Servicio');


servCtrl.createServicio = async (req,res) => {
    const { costo, fecha, refacciones, mecanico } = req.body;
    const newService = new Servicio({
        costo : costo,
        fecha :  fecha,
        refacciones: refacciones,
        mecanico: mecanico
    })
    await newService.save();
//console.log(kms, chofer, modelo, num);
    res.json({message: 'Sevicio Guardado'})

}

servCtrl.getServicio = async (req,res) => {
    console.log(req.params.id)
    res.json({
        title: 'test'
    })
}

servCtrl.getServicios = async (req,res) => {
    const servicios = await Servicio.find();
    res.json(servicios);

}



servCtrl.updateServicio = async (req, res) => {
    const { costo, fecha, refacciones, mecanico } = req.body;
    await Servicio.findByIdAndUpdate(req.params.id, {
        costo,
        fecha,
        refacciones,
        mecanico
    });
    res.json('Servicio Updated');
}

servCtrl.deleteServicio = async (req, res) => {
    await Sevicio.findByIdAndDelete(req.params.id)
    res.json('Servicio Deleted');
}



module.exports = servCtrl;

