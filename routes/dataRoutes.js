const express = require('express');
const router = express.Router();
const multer = require('multer');
const dataController = require('../controllers/dataController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload-csv', upload.single('file'), dataController.uploadCSV);


module.exports = router;
