const { createContainer, asValue, asClass, asFunction } = require('awilix');
const container = createContainer();

// Config
const config = require('../config/index.config')
const app = require('./index')

// Servicios
const { HomeService, CommentsService, IdeaService, UserService } = require('../services/index.services');

// Controladores
const { HomeController, CommentController, IdeaController, UserController } = require('../controllers/index.controllers')

// Rutas 
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes/index');

// Modelos
const { User, Idea, Comment } = require('../models/index.model')

// Repositorios
const { CommentRepository, IdeaRepository, UserRepository } = require('../repositories/index.repositories');
const CommentService = require('../services/comment.service');

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
        CommentService: asClass(CommentService).singleton() 
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment),
    })
    .register({
        CommentRepository: asClass(CommentRepository).singleton,
        IdeaRepository: asClass(IdeaRepository).singleton,
        UserRepository: asClass(UserRepository).singleton,
    });

module.exports = container;
