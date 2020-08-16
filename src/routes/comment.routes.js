const { Router } = require("express");

module.exports = function ({ CommentController }) {
    const router = Router();

    router.get(":id_idea", CommentController.create);
    router.get("/:id_comment/unique", CommentController.get);
    router.get("/:id_idea/idea", CommentController.getIdeaComment);
    router.patch("/:id_comment", CommentController.update);
    router.delete("/:id_comment", CommentController.delete);

    return router;
};
