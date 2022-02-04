const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const path = 'user';
const controller = require('../controller/user');

router.get(
    `/${path}`,
    controller.getData
);


router.get(
    `/${path}/:id`,
    controller.findSingle
);

router.delete(
    `/${path}/:email`,
    controller.deleteSingle
);

module.exports = router;