const { Pages, Sites, Modules, Configs } = require('../../database/models');
const { logger } = require('../libs');

const getById = async (site_id) => {
    return new Promise(async (res, rej) => {
        const config = await Configs.findOne({
            where: { site_id }
        });

        if (!config) return rej('config_not_found');

        config.schedules = JSON.parse(config.schedules);
        config.socialList = JSON.parse(config.socialList);

        res(config);
    });
};

const edit = async (siteId, configs) => {
    return new Promise(async (res, rej) => {

        if (!!configs.socialList) {
            configs.socialList = JSON.stringify(configs.socialList);
        }
        
        if (!!configs.schedules) {
            configs.schedules = JSON.stringify(configs.schedules);
        }

        const config = await Configs.update(
            configs,
            { where: { site_id: siteId } }
        );

        if (!config) return rej('error_on_editing');

        res(config);
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

module.exports = {
    edit,
    getById,
    getByRoute,
    listBySite,
};
