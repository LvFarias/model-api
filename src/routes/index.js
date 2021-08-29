const express = require('express');

const models = require('../../database/models');
const { jwt, logger, email } = require('../libs');
const { userService, siteService } = require('../services');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res, next) => {
  return req.success();
});

router.post('/forgot-password', async (req, res, next) => {
  const user = await userService.getByEmail(req.body.email, true).catch(logger.error);

  if (user) {
    const token = user.password;

    const result = await email.forgotPassword(user.email, user.name, token).catch(logger.error);

    if (result) {
      return req.success();
    }
  }

  return req.error();
});

router.get('/reset-password', async (req, res, next) => {
  const user = await userService.getByEmail(req.params.email, true).catch(logger.error);

  if (user) {
    const passwordMath = await jwt.comparePassword(user.password, req.params.token).catch(logger.error);

    if (passwordMath) {
      return req.success({
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.password,
      });
    }
  }

  return req.error('user_or_password_invalid');
});

router.post('/reset-password', async (req, res, next) => {
  if (!req.body.password && !req.body.cPassword) {
    return req.error('invalid_params');
  }
  
  const user = await userService.getByEmail(req.body.email, true).catch(logger.error);

  if (user) {
    const passwordMath = await jwt.comparePassword(user.password, req.body.token).catch(logger.error);
    
    if (passwordMath) {
      const update = await models.Users.update({ password: req.body.password }, { where: { id: req.body.id } }).catch(logger.error);
      
      if (update[0] > 0) return req.success();
    }
  }
  
  return req.error('error_on_reset_password');
});

router.post('/login', async (req, res, next) => {
  const user = await userService.getByEmail(req.body.email, true).catch(logger.error);

  if (user) {
    const passwordMath = await jwt.comparePassword(user.password, req.body.password).catch(logger.error);
    
    if (passwordMath) {
      delete user.dataValues.password;
      
      const site = await siteService.getByUser(user.id).catch(logger.error);
      
      user.dataValues.token = jwt.createUserToken(user.id);
      user.dataValues.siteId = site ? site.id : null;

      return req.success(user);
    }
  }
  
  return req.error('user_or_password_invalid');
});

router.delete('/logout', async (req, res, next) => {
  return req.success();
});

module.exports = router;
