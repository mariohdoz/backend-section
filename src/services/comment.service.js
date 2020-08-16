const BaseService = require('./base.service');
const { CommentRepository } = require('../repositories/index.repositories');
let _commentRepository = null; 
let _ideaRepository = null; 

class CommentService extends BaseService {

    constructor({CommentRepository, IdeaRepository}) {
        super(CommentRepository);
        _commentRepository = CommentRepository; 
        _ideaRepository = IdeaRepository; 
    }

    async getIdeaComment(id_idea){

        if (!id_idea) {
            const error = new error();
            error.status = 400;
            error.message = "ID must be send";
            throw error;
        }

        const idea = await _ideaRepository.get(id_idea);

        if (!idea) {
            const error = new error();
            error.status = 404;
            error.message = "Idea does not found ";
            throw error;
        }

        const { comments } = idea; 

        return comments; 

    }

    async createComment(comment, id_idea){

        if (!id_idea) {
            const error = new error();
            error.status = 400;
            error.message = "ID must be send";
            throw error;
        }

        const idea = await _ideaRepository.get(id_idea);

        if (!idea) {
            const error = new error();
            error.status = 404;
            error.message = "Idea does not found ";
            throw error;
        }

        const commment = _commentRepository.create(comment);
        idea.comments.push(commment);

        return await _ideaRepository.update(id, { comments: idea.comments });

    }

}

module.exports = CommentService; 
