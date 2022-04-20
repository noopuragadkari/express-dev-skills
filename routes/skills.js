var express = require('express');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
 var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);

// All actual paths start with "/skills"
// GET /todos/:id
//router.get('/:id', skillsCtrl.show);


module.exports = router;