const { Users } = require('../../database/models');

const getById = async (id, all = false) => {
    return new Promise(async (res, rej) => {
        const params = { where: { id } };

        if (!all) {
            params['attributes'] = ['id', 'email', 'name', 'avatar']
        }

        const user = await Users.findOne(params);

        if (!user) return rej('user_not_found');

        res(user);
    });
};

const getByEmail = async (email, all = false) => {
    return new Promise(async (res, rej) => {
        const params = { where: { email } };

        if (!all) {
            params['attributes'] = ['id', 'email', 'name', 'avatar']
        }

        const user = await Users.findOne(params);

        if (!user) return rej('user_not_found');

        res(user);
    });
};

const listAll = async (page = 1, limit = 10) => {
    return new Promise(async (res, rej) => {
        const list = await Users.findAndCountAll({ limit, offset: (page - 1) * limit });
        res(list);
    });
};

module.exports = {
    getById,
    getByEmail,
    listAll,
};
