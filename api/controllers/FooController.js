/**
 * FooController
 *
 * @description :: Server-side logic for managing foos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	restricted: function(req, res) {
    res.json(200, { message: 'Howdy my dear: ' + req.user.email});
  }
};

