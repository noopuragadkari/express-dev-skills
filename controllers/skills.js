
const Skill = require('../models/skills');
module.exports = {
    index,
    show,
    new:newSkills,
    create,
    delete: deleteSkills,
    
  };
  function newSkills(req, res) {
    res.render('skills/new');
  }
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time 
    });
  }
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    }); 
  }
  function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }
  function deleteSkills(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
  