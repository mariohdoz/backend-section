let _commentService = null;

class CommentController {
    
    constructor({CommentService}) {
        _commentService = CommentService;
    }

    async get(req, res) {
        const { id_comment } = req.params;
        const comment = await _commentService.get(id_comment);
        return res.send(comment);
    }

    async create(req, res) {
        const { body } = req;
        const { id_idea } = req.params;
        const created_comment = await _commentService.createComment(body, id_idea);
        return res.status(201).send(created_comment);
    }

    async update(req, res) {
		const { body } = req;
		const { id_comment } = req.params;
		const updated_comment = await _commentService.update(id_comment, body);
		return res.send(updated_comment);
    }

    async delete(req, res) {
		const { id_comment } = req.params;
		const deleted_comment = await _commentService.delete(id_comment);
		return res.send(deleted_comment);
    }

    async getIdeaComment(req, res){
        const { id_idea } = req.params;
        const comment = await _commentService.getIdeasComments(id_idea);
        return res.send(comment);
    }

}

module.exports = CommentController;
