const { Sites } = require('../../database/models');

const getByRoute = async (route) => {
    return new Promise(async (res, rej) => {
        const site = await Sites.findOne({
            where: { route },
            attributes: ['id']
        });

        if (!site) return rej('site_not_found');

        res(site);
    });
};

module.exports = {
    getByRoute,
};
