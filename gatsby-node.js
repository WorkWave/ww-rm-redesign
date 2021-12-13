require = require('esm')(module);

//gatsby doesn't current support es6 outside of the src folder, so this grabs our esm package and just exports it from here

module.exports = require('./gatsby-node.esm.js');
