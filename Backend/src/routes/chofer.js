const { Router } = require('express');
const router = Router();

const  { getChofer, createChofer, deleteChofer, getChofers, updateChofer } = require('../controllers/chofer.controller');

router.route('/')
    .get(getChofers)
    .post(createChofer)


router.route('/:id')
    .get(getChofer)
    .delete(deleteChofer)
    .put(updateChofer);

module.exports = router;