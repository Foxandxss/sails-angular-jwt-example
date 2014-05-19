/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  var token;

  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    }
  } else {
    return res.json(403, {err: 'No Authorization header was found'});
  }

  sailsTokenAuth.verifyToken(token, function(err, userId) {
    if (err) return res.json(403, {err: 'The token is not valid'});

    User.findOne(userId, function(err, user) {
      if (err) return res.json(403, {err: 'The user doesn\'t exist'});

      req.user = user;
    });

    next();
  });
};
