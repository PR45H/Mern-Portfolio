const portfolioRouter = require("express").Router();
const {Intro, About, Skill, Project, Contact} = require('../models/portfolio.model');

// api health check route
portfolioRouter.get('/', (req, res) => {
    res.send('Api Health check complete : Server responded')
})

// api route to get the portfolio data
portfolioRouter.get('/get-portfolio-data', async (req, res) => {
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
});

module.exports = portfolioRouter;