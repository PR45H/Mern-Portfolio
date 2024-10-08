
const {Intro, About, Skill, Project, Contact} = require('../models/portfolio.model');

// api health check route
const healthCheck = (req, res) => {
    res.send('Api Health check complete : Server responded')
}

// api route to get the portfolio data
const getPortfolioData = async (req, res) => {
    try {
        const intro = await Intro.find();
        const about = await About.find();
        const skill = await Skill.find();
        const project = await Project.find();
        const contact = await Contact.find();

        res.status(200).send({
            intro: intro,
            about: about,
            skills: skill,
            projects: project,
            contact: contact
        });
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

// api route to update the intro data
const updateIntro = async (req, res) => {
    try {
        const updatedData = await Intro.findOneAndUpdate(
            {_id: req.body._id},
            {
                welcomeText: req.body.welcomeText,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                caption: req.body.caption,
                description: req.body.description
            }
        )
        res.status(200).send({data: updatedData, message: 'Intro updated successfully'})

    } catch (error) {
        res.status(500).send({message: error.message});
        
    }
};
const updateAbout = async (req, res) => {
    try {
        const updatedData = await About.findOneAndUpdate(
            {_id: req.body._id},
            {
                lottieUrl: req.body.lottieUrl,
                description1: req.body.description1,
                description2: req.body.description2,
                description3: req.body.description3,
                description4: req.body.description4
            }
        )
        res.status(200).send({updatedData, message: 'About updated successfully'})
    } catch (error) {
        res.status(500).send({message: error});
    }
}

// api route to update the skills data
const updateSkills = async (req, res) => {
    try {
        const updatedData = await Skill.findOneAndUpdate(
            { _id: req.body._id },
            {
                skills: req.body.skills
            }
        )
        res.status(200).send({ updatedData, message: "Skills updated successfully"})
    } catch (error) {
        res.status(500).send({message: error});
    }
}

// api routes to update the projects data
const updateProjects = async (req, res) => {
    try {
        const updatedData = await Project.findOneAndUpdate(
            { _id: req.body._id },
            {
                title: req.body.title,
                description: req.body.description,
                techStack: req.body.techStack,
                github: req.body.github,
                deployed: req.body.deployed,
                image: req.body.image
            }
        )
        if(!updatedData) {
            return res.status(404).send({message: "Project not found"})
        } else {
            res.status(200).send({ updatedData, message: "Projects updated successfully"})
        }
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        
        });
    }
}

module.exports = { healthCheck, getPortfolioData, updateIntro, updateAbout, updateSkills, updateProjects };