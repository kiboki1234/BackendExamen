
const express = require('express');
const router = express.Router();
const { getAllCellphone} = require('../controllers/cellphoneController');

router.get('/all', getAllCellphone);

module.exports = router;
