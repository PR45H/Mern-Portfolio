const portfolioRouter = require("express").Router();
const { healthCheck, getPortfolioData, updateIntro, updateAbout } = require("../config/portfolio.controller")
// api health check route
portfolioRouter.get('/', healthCheck)

// api route to get the portfolio data
portfolioRouter.get('/get-portfolio-data', getPortfolioData);

// api route to update the intro data
portfolioRouter.post('/update-intro', updateIntro);

// api route to update the about data
portfolioRouter.post('/update-about', updateAbout);

module.exports = portfolioRouter;