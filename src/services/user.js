const { Users } = require('../../database/models');

const getById = async (id) => {
    return new Promise(async (res, rej) => {
        const user = await Users.findOne({
            where: { id },
            attributes: [ 'id', 'email', 'name', 'avatar' ]
        });

        if(!user) return rej('user_not_found');

        res(user);
    });
};

module.exports = {
    getById
};
