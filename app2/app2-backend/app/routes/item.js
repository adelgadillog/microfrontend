const express = require('express');
const router = express.Router();
const path = 'item';
const controller = require('../controller/item');

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router;