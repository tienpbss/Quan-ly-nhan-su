const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
})

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;


