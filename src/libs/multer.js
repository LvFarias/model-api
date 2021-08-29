const path = require('path');
const multer = require('multer');
const DatauriParser = require('datauri/parser');

const logger = require('./logger');

const filterImage = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: (1024 * 1024 * 6) * 10 },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (allowedMimes.includes(file.mimetype)) cb(null, true);
        else cb(new Error('Invalid file type'))
    },
    onFileUploadStart: (file) => {
        logger.file(`Upload file: ${file.fieldname} is starting`);
    },
    onFileUploadData: (file, data) => {
        logger.file(`${data.length} of ${file.fieldname} arrived`);
    },
    onFileUploadComplete: (file) => {
        logger.file(`Upload file: ${file.fieldname} is finished`);
    }
});

const formatImage = (file) => {
    const parser = new DatauriParser();
    return parser.format(path.extname(file.originalname).toString(), file.buffer).content;
}

module.exports = {
    formatImage,
    filterImage: filterImage.single('myFile'),
};