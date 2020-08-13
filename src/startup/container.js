const { createContainer, asValue, asClass, asFunction } = require('awilix');
const container = createContainer();

// Config
const config = require('../config/index.config')
const app = require('./index')

// Servicios
const { HomeService } = require('../services/index.services');

// Controladores
const { HomeController } = require('../controllers/index.controllers')

// Rutas 
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes/index');

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton() 
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    });

module.exports = container;
