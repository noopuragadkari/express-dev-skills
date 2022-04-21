var express = require('express');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
 var skillsCtrl = require('../controllers/skills');

 // All actual paths start with "/todos"


 // GET /todos
 router.get('/', skillsCtrl.index);
 router.get('/new', skillsCtrl.new);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);  
// new route below
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
