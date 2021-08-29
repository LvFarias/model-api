const express = require('express');

const { site, logger } = require('../libs');
const { configService, pageService } = require('../services');

const router = express.Router();

router.use(express.json());

router.get('/all', site.setOrigin, async (req, res, next) => {
    const configs = await configService.getAll(req.Site.id).catch(logger.error);

    if (!!configs) {
        return req.success(configs);
    }
    
    return req.error('configs_not_exist');
});

router.get('/:config', site.setOrigin, async (req, res, next) => {
    const config = await configService.getByAlias(req.Site.id, req.params.config).catch(logger.error);

    if (!!config) {
        return req.success(config);
    }
    
    return req.error('config_not_found', '', 404);
});

router.get('/content/:route', site.setOrigin, async (req, res, next) => {
    const content = await pageService.getByRoute(req.Site.id, req.params.route).catch(logger.error);

    if (!!content) {
        return req.success(content);
    }
    
    return req.error('page_not_found', '', 404);
});

module.exports = router;
