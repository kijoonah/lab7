var projects = require('../projects.json');
var viewAlt;
/*
 * GET home page.
 */

exports.view = function(req, res){
	projects["viewAlt"] = false;
  	res.render('index', projects);
};

exports.viewAlt = function(req, res){
	projects["viewAlt"] = true;
  	res.render('index', projects);
};
