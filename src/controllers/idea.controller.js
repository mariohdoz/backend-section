let _ideaService = null;

class IdeaController {
	constructor({IdeaService}) {
		_ideaService = IdeaService;
	}

	async get(req, res) {
		const { id_idea } = req.params;
		const idea = await _ideaService.get(id_idea);
		return res.send(idea);
	}

	async getAll(req, res) {
		const ideas = await _ideaService.getAll();
		return res.send(ideas);
	}

	async create(req, res) {
		const { body } = req;
		const created_idea = await _ideaService.create(body);
		return res.status(201).send(created_idea);
	}

	async update(req, res) {
		const { body } = req;
		const { id_idea } = req.params;
		const updated_idea = await _ideaService.update(id_idea, body);
		return res.send(updated_idea);
	}

	async delete(req, res) {
		const { id_idea } = req.params;
		const deleted_idea = await _ideaService.delete(id_idea);
		return res.send(deleted_idea);
	}

	async getUserIdeas(req,res){
		const { user_id } = req.params;
		const ideas = await _ideaService.getUserIdeas(user_id);
		return res.send(ideas);
	}

	async upvoteIdea(req, res){
		const { id_idea } = req.params; 
		const idea = await _ideaService.upVoteIdea(id_idea);
		return res.send(idea);
	}

	async downvoteIdea(req, res){
		const { id_idea } = req.params; 
		const idea = await _ideaService.downVoteIdea(id_idea);
		return res.send(idea);
	}

}

module.exports = IdeaController;
