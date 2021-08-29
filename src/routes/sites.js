const express = require('express');

const { jwt, logger } = require('../libs');
const { siteService } = require('../services');

const router = express.Router();

router.use(express.json());

router.get('/:id', jwt.isAuthorized, async (req, res, next) => {
    const user = await siteService.getById(req.params.id).catch(logger.error);

    if (!!user) {
        return req.success(user);
    }

    return req.error('user_id_invalid');
});

router.get('/', jwt.isAuthorized, async (req, res, next) => {
    const list = await siteService.listAll(req.query.page, req.query.limit).catch(logger.error);

    return req.success(list);
});

router.put('/', (req, res, next) => {
    return req.success();
});

module.exports = router;
