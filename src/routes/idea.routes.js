const { Router } = require("express");

module.exports = function ({ IdeaController }) {
    const router = Router();

    router.get("", IdeaController.getAll);
    router.get("/:id_idea", IdeaController.get);
    router.get("/:id_idea/all", IdeaController.getUserIdeas);
    router.post("", IdeaController.create);
    router.post("/:id_idea/upvote", IdeaController.upvoteIdea);  
    router.post("/:id_idea/downvote", IdeaController.downvoteIdea);  
    router.patch("/:id_idea", IdeaController.update);
    router.delete("/:id_idea", IdeaController.delete);

    return router;
};
