const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    mnv: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cccd: {
        type: String,
        required: true
    },
    bhxh: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    roles: [{type: Schema.Types.ObjectId, ref: 'Role'}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;


