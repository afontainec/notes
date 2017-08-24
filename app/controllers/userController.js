const User = require('../models/user');

exports.userExists = function usernameTaken(req, res) {
  const username = req.params.username.toString();
  // get all places
  User.findByUsername(username).then((user) => {
    if (!user) {
      return res.status(200).send({
        exists: false,
      });
    }
    return res.status(200).send({
      exists: true,
    });
  }).catch(err => res.status(500).send(err));
};

exports.update = function update(req, res) {
  const urlId = req.params.id.toString();

  const id = req.body.id.toString();
  if (urlId !== id) {
    return res.status(400).send('IDs do not match');
  }
  // get all places
  User.update(id, req.body).then(user => res.status(200).send({
    user,
  })).catch(err => res.status(500).send(err));
};


exports.profile = function showProfile(req, res) {
  return res.render('chat.ejs', {
    user: req.user,
  });
};
