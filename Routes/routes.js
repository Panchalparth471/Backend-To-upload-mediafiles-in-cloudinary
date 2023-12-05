const express = require("express");
const router = express.Router();
const { uploadImage, videoUpload, imageReducer,localFileUpload } = require("../Controllers/fileUpload");

router.post("/uploadImage", uploadImage);
router.post("/videoUpload", videoUpload);
router.post("/imageReducer", imageReducer);
router.post("/localFileUpload", localFileUpload);

module.exports = router;