const { JWTHelper } = require('../helpers');
let _userService = null; 

class AuthService {

    constructor({UserService}) {
        _userService = UserService;
    }

    async singUp(user){
        const {username} = user; 
        const userExist = await _userService.getUserByUsername(username);

        if (userExist) {
            const error = new Error(); 
            error.status = 401;
            error.message = "user already exist";
            throw error; 
        }

        return await _userService.create(user);

    }

    async singIn(user){

        const { username, password } = user;
        
        const userExist = await _userService.getUserByUsername(username);
        if (!userExist) {
            const error = new Error(); 
            error.status = 404;
            error.message = "Incorrect user or password";
            throw error; 
        }
        
        const validPassword = userExist.comparePassword(password);
        if (!validPassword) {
            const error = new Error();
            error.status = 404;
            error.message = "Incorrect user or password.";
            throw error;  
        }
        
        const userToEncode = {
            username: userExist.username,
            id: userExist._id
        } 

        const token = JWTHelper.generateToken(userToEncode);

        console.log(token);

        return { token, user: userExist };

    }

}

module.exports = AuthService;
