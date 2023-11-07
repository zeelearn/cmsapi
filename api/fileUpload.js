const express = require('express')
const router = express.Router()
const { upload } = require('../middleware/multerFileUpload')


// Upload a file
router.post('/upload', upload.array('inputFile', 4), (req, res) => {
    try {
        console.log(req.files)
        if (!req.files)
            res.status(400).json({ data: 'No files were uploaded.' })
        else {
            res.status(201).json({
                message: 'Successfully uploaded ' + req.files.length + ' files!',
                data: req.files
            })
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router
