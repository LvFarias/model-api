const logger = require('./logger');
const { siteService } = require('../services');

async function setOrigin(req, res, next) {
    const origin = res.req.headers.origin;
    let route = origin.split('://')[1];
    route = route.replace('www.', '');
    req.Site = await siteService.getByRoute(route).catch(logger.error);

    if (!!req.Site) {
        next();
    } else {
        return res.status(404).send({ message: 'Site not found.' });
    }
}

module.exports = {
    setOrigin,
};
