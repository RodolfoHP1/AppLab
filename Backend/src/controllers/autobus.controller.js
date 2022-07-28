const {bus} = require("nodemon/lib/utils");
const busCtrl = {};

const Bus = require('../models/Bus');


busCtrl.createBus = async (req,res) => {
const { kms, chofer, modelo, num } = req.body;
const newBus = new Bus({
    kms : kms,
    chofer :  chofer,
    modelo: modelo,
    num: num
})
    await newBus.save();
//console.log(kms, chofer, modelo, num);
res.json({message: 'Autobus Guardado'})

}

busCtrl.getBus = async (req,res) => {
    console.log(req.params.id)
    res.json({
        title: 'test'
    })
}

busCtrl.getBuses = async (req,res) => {
    const buses = await Bus.find();
    res.json(buses);

}



busCtrl.updateBus = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await Bus.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        author
    });
    res.json('Bus Updated');
}

busCtrl.deleteBus = async (req, res) => {
    await Bus.findByIdAndDelete(req.params.id)
    res.json('Bus Deleted');
}



module.exports = busCtrl;

