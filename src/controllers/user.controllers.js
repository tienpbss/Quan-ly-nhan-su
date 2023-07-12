const bcrypt = require('bcrypt');

const User = require('../models/user.models');

/*
user co 12 thuoc tinh

mnv: Chua biet nen de tam Date.now
email
password mac dinh la ddmmyyyy
dob: dinh dang dd/mm/yyyy
avatar - khong can khoi tao. De user tu cap nhat
firstname
lastname
phone
cccd
bhxh
address
roles
*/


module.exports.createUser = async (req, res) => {
    const { email, dob, firstname, lastname, phone, cccd, bhxh, address, roles } = req.body;
    const mnv = Date.now().toString();

    const plainPassword = dob.split('/')
        .reduce((init, element) => init + element);

    const salt = 10
    const hashPassword = await bcrypt.hash(plainPassword, salt);
    const newUser = new User({
        email, 
        dob, 
        firstname, 
        lastname, 
        phone, 
        cccd, 
        bhxh, 
        address, 
        roles,
        mnv,
        hashPassword
    })
    const result = await newUser.save();
    res.status(200).send(result);
}

module.exports.getAllUsers = (req, res) => {

}



