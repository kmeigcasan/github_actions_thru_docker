const Express 			    = require("express");
const FairRoutes 		    = Express.Router();
const FairController        = require('../controllers/fair.controller');

FairRoutes.get("/", function(req, res, next) {
    new FairController(req, res).index();
});

module.exports = FairRoutes;
