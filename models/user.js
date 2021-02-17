const MONGOOSE = require('mongoose');

const OPTIONS = {
    timestamps: true
};

const userSchema = new MONGOOSE.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
}, OPTIONS);

module.exports = MONGOOSE.model('User', userSchema);