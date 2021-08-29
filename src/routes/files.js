const fs = require('fs');
const express = require('express');

const { jwt, logger, multer } = require('../libs');
const { cloudinaryService } = require('../services');

const router = express.Router();

router.post('/upload/image', jwt.isAuthorized, multer.filterImage, async (req, res, next) => {
    const file = multer.formatImage(req.file);

    const result = await cloudinaryService.uploadImage(file, 'teste', 'Whims Inc').catch(logger.error);
    
    return req.success(result);
});

module.exports = router;
