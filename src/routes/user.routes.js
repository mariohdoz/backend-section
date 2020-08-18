const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware } = require('../middlewares/index.middlewares');
const { validateToken } = AuthMiddleware;
const { parseIn } = ParseIntMiddleware;
const { fcache } = CacheMiddleware;

module.exports = function({ UserController }) {
	const router = Router();
	
	router.get("/", [validateToken, parseIn, fcache],UserController.getAll);
	router.get("/:user_id", UserController.get);
	router.patch("/:user_id", UserController.update);
	router.delete("/:user_id", UserController.delete);

	return router;
};
