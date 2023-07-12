// const Role = require('../models/role.models')

// module.exports.createRole = async (req, res) => {
//     const { name, permissions } = req.body;
//     const newRole = new Role({
//         name,
//         permissions
//     })
//     try{
//         const result = await newRole.save();
//         res.status(200).json({ result });        
//     }
//     catch(err) {
//         console.log(err);
//         res.status(500).json({ err: "error when create new role"});
//     }

// }

// module.exports.viewAllRoles = async (req, res) => {
//     try{
//         const roles = await Role.find();
//         res.status(200).json({ roles });        
//     }
//     catch(err){
//         console.log(err);
//         res.status()
//     }

// }

// module.exports.viewRole = async (req, res) => {
//     const { _idRole }  = req.params
//     try{
//         const role = await Role.findById(_idRole);
//         res.status(200).json({ role });        
//     }
//     catch(err){
//         console.log(err);
//         res.status(404).json({ err: 'error when find role'});
//     }
// }

// module.exports.editRole = async (req, res) => {
//     const { _idRole } = req.params;
//     const { name, permissions } = req.body;
//     try {
//         const updatedRole = await Role.findByIdAndUpdate(_idRole, { name, permissions }, { new: true});
//         res.status(200).json({ updatedRole });
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({ err: 'error when update role'});
//     }
// }

// module.exports.deleteRole = async (req, res) => {
//     const { _idRole } = req.params;
//     try {
//         const removedRole = await Role.findByIdAndDelete(_idRole);
//         res.status(200).json({ removedRole })
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({ err: 'error when delete role'});
//     }
// }


const Role = require('../models/role.models');

exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    // Validate input data using a validation library like Joi

    const newRole = new Role({
      name,
      permissions,
    });

    const result = await newRole.save();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error creating new role', error);
    res.status(500).json({ error: 'Failed to create new role' });
  }
};

exports.viewAllRoles = async (req, res) => {
  try {
    const roles = await Role.find().sort({ name: 1 });
    res.status(200).json(roles);
  } catch (error) {
    console.error('Error fetching roles', error);
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

exports.viewRole = async (req, res) => {
  try {
    const { _idRole } = req.params;
    const role = await Role.findById(_idRole);

    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }

    res.status(200).json(role);
  } catch (error) {
    console.error('Error fetching role', error);
    res.status(500).json({ error: 'Failed to fetch role' });
  }
};

exports.editRole = async (req, res) => {
  try {
    const { _idRole } = req.params;
    const { name, permissions } = req.body;

    // Validate input data using a validation library like Joi

    const updatedRole = await Role.findByIdAndUpdate(
      _idRole,
      { name, permissions },
      { new: true }
    );

    if (!updatedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }

    res.status(200).json(updatedRole);
  } catch (error) {
    console.error('Error updating role', error);
    res.status(500).json({ error: 'Failed to update role' });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const { _idRole } = req.params;
    const removedRole = await Role.findByIdAndDelete(_idRole);
    console.log(removedRole);
    if (!removedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }

    res.status(200).json(removedRole);
  } catch (error) {
    console.error('Error deleting role', error);
    res.status(500).json({ error: 'Failed to delete role' });
  }
};
