const { Sites } = require('../../database/models');

const getById = async (id, all = false) => {
    return new Promise(async (res, rej) => {
        const params = { where: { id } };

        if (!all) {
            params['attributes'] = ['id', 'name', 'route', 'user_id']
        }

        const site = await Sites.findOne(params);

        if (!site) return rej('site_not_found');

        res(site);
    });
};

const getByUser = async (id, all = false) => {
    return new Promise(async (res, rej) => {
        const params = { where: { user_id: id } };

        if (!all) {
            params['attributes'] = ['id', 'name', 'route', 'user_id']
        }

        const site = await Sites.findOne(params);

        if (!site) return rej('site_not_found');

        res(site);
    });
};

const getByRoute = async (route, all = false) => {
    return new Promise(async (res, rej) => {
        const params = { where: { route } };

        if (!all) {
            params['attributes'] = ['id', 'name', 'route', 'user_id']
        }

        const site = await Sites.findOne(params);

        if (!site) return rej('site_not_found');

        res(site);
    });
};

const listAll = async (page = 1, limit = 10) => {
    return new Promise(async (res, rej) => {
        const list = await Sites.findAndCountAll({ limit, offset: (page - 1) * limit });
        res(list);
    });
};

module.exports = {
    getById,
    getByUser,
    getByRoute,
    listAll,
};
