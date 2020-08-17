const { createContainer, asValue, asClass, asFunction } = require('awilix');
const container = createContainer();

// Config
const config = require('../config/index.config')
const app = require('./index')

// Servicios
const { HomeService, CommentService, IdeaService, UserService, AuthService } = require('../services/index.services');

// Controladores
const { HomeController, CommentController, IdeaController, UserController, AuthController } = require('../controllers/index.controllers')

// Rutas 
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes');
const Routes = require('../routes/index');

// Modelos
const { User, Idea, Comment } = require('../models/index.model')

// Repositorios
const { CommentRepository, IdeaRepository, UserRepository } = require('../repositories/index.repositories');

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton(),
        AuthService: asClass(AuthService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton(),
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    })
    .register({
        CommentRepository: asClass(CommentRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton()
    });

module.exports = container;
