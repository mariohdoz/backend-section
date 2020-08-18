const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require('../middlewares/index.middlewares');
const { validateToken } = AuthMiddleware;
const { parseIn } = ParseIntMiddleware;

module.exports = function ({ IdeaController }) {
    const router = Router();

    router.get("", IdeaController.getAll);
    router.get("/:id_idea", IdeaController.get);
    router.get("/:id_idea/all", [validateToken, parseIn],IdeaController.getUserIdeas);
    router.post("", IdeaController.create);
    router.post("/:id_idea/upvote", IdeaController.upvoteIdea);  
    router.post("/:id_idea/downvote", IdeaController.downvoteIdea);  
    router.patch("/:id_idea", IdeaController.update);
    router.delete("/:id_idea", IdeaController.delete);

    return router;
};
