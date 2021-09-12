const slugify = require('slugify');
const { Modules } = require('../../database/models');

const edit = async (moduleId, newModule) => {
    return new Promise(async (res, rej) => {
        const defaultKeysModule = [ 'site_id', 'page_id', 'alias', 'type', 'title', 'createdAt', 'updatedAt', 'data' ];

        if (!!newModule.title) newModule.alias = slugify(newModule.title);
        
        newModule.data = JSON.stringify(filter(newModule, defaultKeysModule));
        
        newModule = reverseFilter(newModule, defaultKeysModule);

        const module = await Modules.update(
            newModule,
            { where: { id: moduleId } }
        );

        if (!module) return rej('error_on_editing');

        res(module);
    });
};

const filter = (data, filter) => {
    return Object.keys(data).filter(key => !filter.includes(key)).reduce((newData, key) => {
        newData[key] = data[key];
        return newData;
    }, {});
}
const reverseFilter = (data, filter) => {
    return Object.keys(data).filter(key => filter.includes(key)).reduce((newData, key) => {
        newData[key] = data[key];
        return newData;
    }, {});
}

module.exports = {
    edit,
};
