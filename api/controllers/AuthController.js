/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	authenticate: function(req, res) {
    var email = req.param('email');
    var password = req.param('password');

    if (!email || !password) {
      return res.json(403, {err: 'username and password required'});
    }

    User.findOneByEmail(email, function(err, user) {
      if (!user) {
        return res.json(403, {err: 'invalid username or password'});
      }

      User.validPassword(password, user, function(err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(403, {err: 'invalid username or password'});
        } else {
          res.json({user: user, token: sailsTokenAuth.issueToken(user.id)});
        }
      });
    })
  }
};