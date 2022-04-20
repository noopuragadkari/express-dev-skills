const skills = [
    {name:'Javascript',proficiency:5},
    {name:'HTML/CSS',proficiency:6},
    {name:'ExpressJS',proficiency:4},
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(todo => Skill.id === id);
  }