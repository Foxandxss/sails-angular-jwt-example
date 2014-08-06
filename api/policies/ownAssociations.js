module.exports = function(req, res, next) {
  var userId = req.param('parentid');
  var currentUserId = req.token.sid;

  if (userId != currentUserId) {
    return res.json(400, {err: 'You are not allowed to do that'}); // Is 400 correct here?
  }

  next();
};