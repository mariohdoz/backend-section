const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require('../middlewares/index.middlewares');
const { validateToken } = AuthMiddleware;
const { parseIn } = ParseIntMiddleware;

module.exports = function({ UserController }) {
	const router = Router();
	
	router.get("/", [validateToken, parseIn],UserController.getAll);
	router.get("/:user_id", UserController.get);
	router.patch("/:user_id", UserController.update);
	router.delete("/:user_id", UserController.delete);

	return router;
};
