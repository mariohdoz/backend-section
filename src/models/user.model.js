const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync, hash } = require('bcrypt');

const UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

UserSchema.pre('save', async (next) => {
    const user = this

    if (!user.isModified("password")){
        return next();
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);

    user.password = hashedPassword;
    next();
});

UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.Schema("User", UserSchema);