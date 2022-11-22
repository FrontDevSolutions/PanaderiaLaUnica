const validateAuth = require("../middleware/auth");
const UserController = require('../bin/controllers/User.controller');

module.exports = (app) => {
    app.get('/users', validateAuth, UserController.findAll);

    app.get('/users/:idUser', UserController.findOne);

    app.post('/users', UserController.create);

    app.post('/login', UserController.login);
};