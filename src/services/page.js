const { Pages, Sites, Modules, Configs } = require('../../database/models');

const getById = async (id) => {
    return new Promise(async (res, rej) => {
        const page = await Pages.findOne({
            where: { id },
            include: [{ model: Modules, as: 'Modules' }],
            order: [[ Modules, 'id', 'ASC' ]]
        });

        if (!page) return rej('page_not_found');

        page.dataValues.modules = page.Modules.map(module => {
            const obj = JSON.parse(module.data);

            delete module.dataValues.data;

            for (const key in obj) {
                module.dataValues[key] = obj[key];
            }

            return module;
        });

        delete page.dataValues.Modules;

        res(page);
    });
};

const getByRoute = async (site_id, route) => {
    return new Promise(async (res, rej) => {
        const page = await Pages.findOne({
            where: { site_id, route },
            include: [
                { model: Modules, as: 'Modules' },
                { model: Configs, as: 'Configs' }
            ],
            order: [[ Modules, 'id', 'ASC' ]]
        });

        if (!page) return rej('page_not_found');

        page.dataValues.modules = page.Modules.map(module => {
            const obj = JSON.parse(module.data);

            delete module.dataValues.data;

            for (const key in obj) {
                module.dataValues[key] = obj[key];
            }

            return module;
        });

        delete page.dataValues.Modules;
        
        page.dataValues.Configs = page.Configs.map(config => {
            config.dataValues.socialList = JSON.parse(config.socialList);
            config.dataValues.schedules = JSON.parse(config.schedules);

            return config;
        });

        page.dataValues.Configs = page.dataValues.Configs[0];

        res(page);
    });
};

const listBySite = async (site_id, page = 1, limit = 10) => {
    return new Promise(async (res, rej) => {
        const list = await Pages.findAndCountAll({
            where: { site_id },
            include: [{
                model: Sites
            }],
            limit,
            offset: (page - 1) * limit
        });
        res(list);
    });
};

const listAll = async (page = 1, limit = 10, user_id = null) => {
    return new Promise(async (res, rej) => {
        const where = {};
        if (!!user_id) where.user_id = user_id;
        const include = [{ model: Sites, where }];
        const list = await Pages.findAndCountAll({ include, limit, offset: (page - 1) * limit });
        res(list);
    });
};

module.exports = {
    getById,
    listAll,
    getByRoute,
    listBySite,
};
