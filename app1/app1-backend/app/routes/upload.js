const express = require("express");
const router = express.Router();
const path = "upload";
const controller = require("../controller/upload");

router.post(`/${path}`, controller.upload,controller.uploadFile);

module.exports = router;
