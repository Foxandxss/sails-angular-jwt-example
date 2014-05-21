/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  // Doing a DELETE /user/:parentid/message/:id will not delete the message itself
  // We do that here.
	remove: function(req, res) {
    var relation = req.options.alias;
    switch (relation) {
      case 'messages':
        destroyMessage(req, res);
    }
  },

  create: function(req, res) {
    res.json(301, 'To create a user go to /auth/register');
  }
};

function destroyMessage(req, res) {
  Message.findOne(req.param('id')).exec(function(err, message) {
    if (err) return res.json(err.status, {err: err});
    if (!message) return res.json(404, {err: 'Message not found'});
    if (req.param('parentid') != message.user) return res.json(404, {err: 'Message not found'});

    Message.destroy(req.param('id')).exec(function(err, message) {
      if (err) return res.json(err.status, {err: err});
      return res.json(204, '');
    });
  });


}

