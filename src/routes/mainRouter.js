const express = require('express');
const router = express.Router();
const adminiMiddleware = require ('../middlewares/adminMiddleware.js')

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/admin', adminiMiddleware, mainController.admin);

module.exports = router;
