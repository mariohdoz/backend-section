const { Router } = require("express");

module.exports = function({ UserController }) {
	const router = Router();
	
	router.get("/", UserController.getAll);
	router.get("/:user_id", UserController.get);
	router.patch("/:user_id", UserController.update);
	router.delete("/:user_id", UserController.delete);

	return router;
};
