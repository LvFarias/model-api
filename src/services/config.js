const { Configs } = require('../../database/models');

const getAll = async (site_id) => {
    return new Promise(async (res, rej) => {
        const configs = await Configs.findAll({
            where: { site_id },
        });

        if (!configs) return rej('configs_not_found');

        res(configs);
    });
};

const getByAlias = async (site_id, alias) => {
    return new Promise(async (res, rej) => {
        const config = await Configs.findOne({
            where: { site_id, alias },
        });

        if (!config) return rej('config_not_found');

        res(config);
    });
};

module.exports = {
    getAll,
    getByAlias,
};
