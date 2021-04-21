const debugLib = require('debug');

const dbLog = debugLib('Model-API:db');
const db = (query, ...args) => {
    dbLog(query);
};
const info = debugLib('Model-API:info');
const debug = debugLib('Model-API:debug');
const error = debugLib('Model-API:error');
const server = debugLib('Model-API:server');

module.exports = {
    db,
    info,
    debug,
    error,
    server,
};
