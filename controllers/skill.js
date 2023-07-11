const skill = require("../model/skill")
function index(req, res) {
    res.render("skills/index", {
     skills: skill.getAll()
    });
}

function show(req,res) {
    res.render("skills/show", {
        skills: skill.getSkills(req.params.id)
    })
}



module.exports ={
    index,
    show
}