const cloudinary = require('cloudinary').v2;

const uploadImage = async (file, fileName, folder) => {
    return new Promise(async (res, rej) => {
        const options = {
            folder,
            overwrite: true,
            use_filename: true,
            resource_type: 'image',
            filename_override: fileName,
            discard_original_filename: true,
        };

        cloudinary.uploader.upload(file, options, (error, result) => {
            if (error) rej(error);

            res(result.url);
        });
    });
};

module.exports = {
    uploadImage,
};
