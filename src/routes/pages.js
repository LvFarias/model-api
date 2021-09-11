const express = require('express');

const { jwt, logger } = require('../libs');
const { pageService, moduleService } = require('../services');

const router = express.Router();

router.use(express.json());

router.get('/site/:id', jwt.isAuthorized, async (req, res, next) => {
    const list = await pageService.listBySite(req.params.id, req.query.page, req.query.limit).catch(logger.error);
    
    return req.success(list);
});

router.get('/:id', jwt.isAuthorized, async (req, res, next) => {
    const page = await pageService.getById(req.params.id).catch(logger.error);

    if (!!page) {
        return req.success(page);
    }

    return req.error('page_id_invalid');
});

router.get('/', jwt.isAuthorized, async (req, res, next) => {
    const list = await pageService.listAll(req.query.page, req.query.limit, req.UserId).catch(logger.error);

    return req.success(list);
});

router.put('/', (req, res, next) => {
    return req.success();
});

router.put('/module/:id', async (req, res, next) => {
    const result = await moduleService.edit(req.params.id, req.body);
    return req.success(result);
});

module.exports = router;
