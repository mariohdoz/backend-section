let _userService = null;

class UserController {

    constructor(UserService) {
        _userService = UserService; 
    }

    async get(req, res ){
        const { id_user } = req.params; 
        const user = await _userService.get(id_user);
        return res.send(user);
    }

    async getAll(req, res ){
        const users = await _userService.getAll();
        return res.send(users);
    }

    async create(req, res ){
        const { body } = req; 
        const created_user = await _userService.create(body);
        return res.status(201).send(created_user);
    }

    async update(req, res ){
        const { body } = req; 
        const { id_user } = req.params; 
        const updated_user = await _userService.update(id_user, body);
        return res.send(updated_user);
    }

    async delete(req, res ){
        const { id_user } = req.params; 
        const deleted_user = await _userService.delete(id_user);
        return res.send(deleted_user);
    }

}

module.exports = UserController;
