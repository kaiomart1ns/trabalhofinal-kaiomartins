const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Usuario.findOne({ where: { username } });
  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = user;
    res.redirect('/menu.html');
  } else {
    res.status(401).send('Credenciais inválidas');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
