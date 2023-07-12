const skill = require("../model/skill")
function index(req, res) {
    res.render("skills/index", {
     skills: skill.getAll(),
     title: "All skills"
    });
}

function show(req,res) {
    res.render("skills/show", {
        Skills: skill.getSkills(req.params.id),
        title: "Skill details"
    });
}

function create(req, res) {
    skill.create(req.body);
    res.redirect("/skills");
  }

  function newSkill(req, res) {
    res.render("skills/new", { title: "New Skill"});
  }

  function deleteSkill(req, res) {
    skill.deleteOne(req.params.id)
    console.log("here")
    res.redirect("/skills");
  }

module.exports ={
    index,
    show,
    create,
    new: newSkill,
    deleteSkill
}