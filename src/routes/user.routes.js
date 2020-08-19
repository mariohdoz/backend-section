const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware } = require('../middlewares/index.middlewares');
const { validateToken } = AuthMiddleware;
const { parseIn } = ParseIntMiddleware;
const { fcache } = CacheMiddleware;

module.exports = function({ UserController }) {
	const router = Router();
	
	router.get("/", parseIn, UserController.getAll);
	router.get("/:user_id", validateToken, UserController.get);
	router.patch("/:user_id", validateToken, UserController.update);
	router.delete("/:user_id", validateToken, UserController.delete);

	return router;
};
