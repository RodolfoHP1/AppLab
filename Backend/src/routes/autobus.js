const { Router } = require('express');
const router = Router();

const  { getBus, createBus, deleteBus, getBuses, updateBus } = require('../controllers/autobus.controller');

router.route('/')
    .get(getBuses)
    .post(createBus)


router.route('/:id')
     .get(getBus)
     .delete(deleteBus)
     .put(updateBus);

module.exports = router;