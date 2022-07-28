const { Router } = require('express');
const router = Router();

const  { getViaje, createViaje, deleteViaje, getViajes, updateViaje} = require('../controllers/viaje.controller');

router.route('/')
    .get(getViajes)
    .post(createViaje)


router.route('/:id')
    .get(getViaje)
    .delete(deleteViaje)
    .put(updateViaje);

module.exports = router;