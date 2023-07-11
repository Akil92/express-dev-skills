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

module.exports = {
    getSkills,
    getAll

}