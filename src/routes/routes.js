const express = require("express");
const router = express.Router();
// const urlModel = require('../model/urlModel') // importing urlmodel
const { createUrl, getUrl } = require('../controller/urlcontroller')


// creating get and Post api 

router.post("/url/shorten", createUrl);
router.get("/:urlCode", getUrl)

//exporting 
module.exports = router;

