const { Pages } = require('../../database/models');

const getByRoute = async (site_id, route) => {
    return new Promise(async (res, rej) => {
        const page = await Pages.findOne({
            where: { site_id, route }
        });

        if (!page) return rej('page_not_found');

        page.modules = JSON.parse(page.modules);

        res(page);
    });
};

module.exports = {
    getByRoute,
};
