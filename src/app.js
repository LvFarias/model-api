const cors = require('cors');
const express = require('express');

const logger = require('./libs/logger');
const indexRoute = require('./routes');
const usersRoutes = require('./routes/users');
const sitesRoutes = require('./routes/sites');
const pagesRoutes = require('./routes/pages');
const filesRoutes = require('./routes/files');
const configRoutes = require('./routes/config');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(initEndPoint);
app.use('/files', filesRoutes);
app.use('/users', usersRoutes);
app.use('/sites', sitesRoutes);
app.use('/pages', pagesRoutes);
app.use('/config', configRoutes);
app.use('/', indexRoute);
app.use(endEndPoint);

function initEndPoint(req, res, next) {
    logger.server(`INIT --> ${req.method}: ${req.url}`);
    req.returnObj = {
        data: {},
        error: '',
        message: '',
        status: 200,
    };
    
    req.success = (data = {}) => {
        req.returnObj.data = data;
        req.returnObj.status = 200;
        next();
    };
    
    req.error = (error, message = '', status = 400) => {
        req.returnObj.error = error;
        req.returnObj.status = status;
        req.returnObj.message = message;
        next();
    };

    next();
}

function endEndPoint(req, res, next) {
    const status = req.returnObj.status;
    delete req.returnObj.status;
    if (!req.returnObj.error) delete req.returnObj.error;
    if (!req.returnObj.message) delete req.returnObj.message;
    if (!Object.keys(req.returnObj.data).length) delete req.returnObj.data;
    logger.server(`END --> ${req.method}: ${req.url} - STATUS: ${res.statusCode} - ORIGIN: ${res.req.headers.origin}`);
    return res.status(status).json(req.returnObj);
}

module.exports = app;
