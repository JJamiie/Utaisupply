let express = require('express');
let categoryCtrl = require("../../controller/category.controller.js");

let router = express.Router();

/** GET /api/users - Get list of users */
router.route('/').get(categoryCtrl.list);

module.exports = router;