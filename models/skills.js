
  const skills = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'HTML/CSS'},
    {id: 3, name: 'ExpressJS'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }
  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	return skills.find(skill => skill.id === id);
}
function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;

  skills.push(skill);
}
function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}