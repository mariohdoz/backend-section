const BaseService = require('./base.service');
let _ideaRepository = null; 

class IdeaService extends BaseService{

    constructor({IdeaRepository}) {
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }
    
    async getUserIdeas(author){

        if (!author) {
            const error = new error();
            error.status = 400;
            error.message = "Author ID must be send";
            throw error;
        }


        return await _ideaRepository.getUserIdeas(author);
    }

    async upVoteIdea(id){

        if (!id) {
            const error = new error();
            error.status = 400;
            error.message = "ID must be send";
            throw error;
        }

        const idea = await _ideaRepository.get(id);

        if (!idea) {
          const error = new error();
          error.status = 404;
          error.message = "Idea does not found ";
          throw error;
        }

        idea.upvotes.push(true);

        return await _ideaRepository.update(id, {upvotes: idea.upvotes});
    }

    async downVoteIdea(id){

        if (!id) {
            const error = new error();
            error.status = 400;
            error.message = "ID must be send";
            throw error;
        }

        const idea = await _ideaRepository.get(id);

        if (!idea) {
          const error = new error();
          error.status = 404;
          error.message = "Idea does not found ";
          throw error;
        }

        idea.downvotes.push(true);

        return await _ideaRepository.update(id, {downvotes: idea.upvotes});
    }

}

module.exports = IdeaService;
