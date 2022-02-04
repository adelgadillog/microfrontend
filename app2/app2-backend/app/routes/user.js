const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const path = 'user';
const controller = require('../controller/user');

router.post(
    `/${path}`,
    controller.postData
);





module.exports = router;