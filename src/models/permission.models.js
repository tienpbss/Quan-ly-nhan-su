const mongoose = require('mongoose');
const Schema = mongoose.Schema

const permissionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    code: {
        type: String,
        unique: true,
        require: true
    }
})

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;




