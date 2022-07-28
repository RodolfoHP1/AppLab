const { Router } = require('express');
const router = Router();

const  { getServicio, createServicio, deleteServicio, getServicios, updateServicio } = require('../controllers/servicios.controller');

router.route('/')
    .get(getServicios)
    .post(createServicio)


router.route('/:id')
    .get(getServicio)
    .delete(deleteServicio)
    .put(updateServicio);

module.exports = router;