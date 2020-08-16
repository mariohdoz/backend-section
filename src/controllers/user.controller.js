let _userService = null;

class UserController {

    constructor({ UserService }) {
        _userService = UserService;
    }
    
    async get(req, res ){
        const { userId } = req.params; 
        const user = await _userService.get(userId);
        return res.send(user);
    }

    async getAll(req, res ){

        console.log("Entrò")
        console.log(_userService)

        const users = await _userService.getAll();
        return res.send(users);
    }

    async update(req, res ){
        const { body } = req; 
        const { userId } = req.params; 
        const updated_user = await _userService.update(userId, body);
        return res.send(updated_user);
    }

    async delete(req, res ){
        const { userId } = req.params; 
        const deleted_user = await _userService.delete(userId);
        return res.send(deleted_user);
    }

}

module.exports = UserController;
