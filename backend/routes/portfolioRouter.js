const portfolioRouter = require("express").Router();
const { healthCheck, getPortfolioData, updateIntro, updateAbout, updateSkills } = require("../config/portfolio.controller")
// api health check route
portfolioRouter.get('/', healthCheck)

// api route to get the portfolio data
portfolioRouter.get('/get-portfolio-data', getPortfolioData);

// api route to update the intro data
portfolioRouter.post('/update-intro', updateIntro);

// api route to update the about data
portfolioRouter.post('/update-about', updateAbout);

// api route to update the skills data
portfolioRouter.post('/update-skills', updateSkills);

// api routes to update the projects data

module.exports = portfolioRouter;