let _userService = null;

class UserController {

    constructor({ UserService }) {
        _userService = UserService;
    }
    
    async get(req, res ){
        const { user_id } = req.params; 
        const user = await _userService.get(user_id);
        return res.send(user);
    }

    async getAll(req, res ){
        const {pageSize, pageNumber} = req.query;
        const users = await _userService.getAll(pageSize, pageNumber);
        return res.send(users);
    }

    async update(req, res ){
        const { body } = req; 
        const { user_id } = req.params; 
        const updated_user = await _userService.update(user_id, body);
        return res.send(updated_user);
    }

    async delete(req, res ){
        const { user_id } = req.params; 
        const deleted_user = await _userService.delete(user_id);
        return res.send(deleted_user);
    }

}

module.exports = UserController;
