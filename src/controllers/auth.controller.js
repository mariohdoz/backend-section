let _authService = null;

class AuthController {

    constructor({ AuthService }) {
        _authService = AuthService; 
    }

    async singUp(req, res){
        const { body } = req; 
        const createdUser = await _authService.singUp(body);
        return res.status(201).send(createdUser);
    }

    async singIn(req, res){
        const { body } = req;
        const credentials = await _authService.singIn(body);
        return res.status(200).send(credentials);
    }

}

module.exports = AuthController;
