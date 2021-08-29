const slugify = require('slugify');
const { Modules } = require('../../database/models');

const edit = async (moduleId, data) => {
    return new Promise(async (res, rej) => {

        if (!!data.title) {
            data.alias = slugify(data.title);
        }

        const module = await Modules.update(
            { data: JSON.stringify(data) },
            { where: { id: moduleId } }
        );

        if (!module) return rej('error_on_editing');

        res(module);
    });
};

module.exports = {
    edit,
};
