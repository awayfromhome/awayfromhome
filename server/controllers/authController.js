const bcrypt = require('bcryptjs');

module.exports = {
  getUser: (req, res) => {
    res.status(200).json(req.session.user);
  },
  register: async (req, res) => {
    const { username, password, email, number, role } = req.body;
    const db = req.app.get('db');
    const result = await db.get_user(username);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).json('There is already an account associated with this username. Please log in.');
    }
    const hash = await bcrypt.hash(password, 12);
    const registeredUser = await db.register_user(username, hash, email, number, role);
    const user = registeredUser[0];
    req.session.user = {
      username: user.username,
      id: user.users_id,
      role: user.role
    };
    return res.status(200).json(req.session.user);
  },
  //Create Databsase file still
  extendedRegister: async (req, res) => {
    const { username, password, email, number, owner, name, address, city, postalCode, country } = req.body;
    const db = req.app.get('db');
    const result = await db.get_user(username);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).json('There is already an account associated with this username. Please log in.');
    }
    const hash = await bcrypt.hash(password, 12);
    const registeredUser = await db.register_user_extended(username, hash, email, number, owner, name, address, city, postalCode, country);
    const user = registeredUser[0];
    req.session.user = {
      username: user.username,
      id: user.users_id,
      role: user.role
    };
    return res.status(200).json(req.session.user);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');
    const foundUser = await db.get_user(username);
    const user = foundUser[0];
    if (!user) {
      return res.status(401).json('Username not found. Please register as a new user.');
    }
    const isAuthenticated = bcrypt.compareSync(password, user.hash);
    if (!isAuthenticated) {
      return res.status(403).json('Incorrect password');
    }
    req.session.user = {
      username: user.username,
      id: user.users_id,
      role: user.role
    };
    return res.status(200).json(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  }
};
