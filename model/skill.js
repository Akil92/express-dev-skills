const skills = [
    {id: 10000, skill: "efficient"},
    {id: 12000, skill: "problem solving"},
    {id: 14000, skill: "time management"},
    {id: 16000, skill: "communication"}
]

function getSkills(id) {
   id = parseInt(id)
        return skills.find(skill => id === skill.id)
    }

function getAll() {
    return skills
}

function newSkill(req, res) {
    res.render("/skills/new", { title: "New Skills"});
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id= parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1);
}



module.exports = {
    getSkills,
    getAll,
    new: newSkill,
    create,
    deleteOne

}